import React, { useEffect, useMemo, useState } from "react";
import MyModal from "../MyModal/MyModal";
import div from "./posts.css";
import Crud from "../../services/crud.service";
import Spinner from "../Spinner";
import {
  useSortedAndSearchedPosts,
  useSortedPosts,
} from "../../hooks/usePosts";

const Posts = () => {
  const postsCrud = new Crud("posts");
  const [showModal, setShowModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [sorter, setSorter] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const fetchAllPosts = async () => {
    setLoading(true);
    postsCrud.get("?_page=1&_limit=15").then((res) => {
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    });
  };

  const confirmDeletePost = (post) => {
    setCurrentPost(post);
    setShowModal(true);
  };

  const deletePost = () => {
    postsCrud
      .delete(currentPost.id)
      .then((res) => {
        setPosts(posts.filter((post) => post.id !== currentPost.id));
        setShowModal(false);
      })
      .catch((err) => console.log(err));
  };

  const onSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const onSort = (e) => {
    setSorter(+e.target.value);
  };

  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    posts,
    sorter,
    searchQuery
  );

  return (
    <div className="container">
      <div className="input-group mt-3">
        <span className="input-group-text" id="basic-addon1">
          Search
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Posts"
          aria-label="Username"
          aria-describedby="basic-addon1"
          onChange={onSearch}
        />
      </div>
      <select
        className="form-select mt-3"
        aria-label="Default select example"
        onChange={onSort}
      >
        <option defaultValue value="0">
          from Min to Max
        </option>
        <option value="1">from Max to Min</option>
      </select>
      {loading ? (
        <Spinner />
      ) : (
        <div className="post-container">
          {sortedAndSearchedPosts.length ? (
            sortedAndSearchedPosts.map((post, id) => (
              <div
                className="card text-white bg-dark mb-3"
                key={post.id}
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">{post.id}</div>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.body}</p>
                </div>
                <button
                  onClick={() => confirmDeletePost(post)}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <h3 className="mt-3">Posts not found</h3>
          )}
        </div>
      )}

      <MyModal
        visible={showModal}
        saveBtnShow
        closeBtnShow
        onCancel={() => setShowModal(false)}
        onConfirm={() => deletePost()}
      >
        <h4>Are you sure?</h4>
      </MyModal>
    </div>
  );
};

export default Posts;
