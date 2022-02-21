import React, { useMemo, useState } from "react";
import MyModal from "../MyModal/MyModal";
import div from './posts.css';

const Posts = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [sorter, setSorter] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');
    const [posts, setPosts] = useState (
    [{
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        "userId": 1,
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }]
    )

    const confirmDeletePost = (post) => {
        setCurrentPost(post);
        setShowModal(true);
    }

    const deletePost = () => {
        setPosts(posts.filter((post) => post.id !== currentPost.id));
        setShowModal(false);
    }

    const onSearch = (e) => {
        setSearchQuery(e.target.value);
    }

    const onSort = (e) => {
        setSorter(+e.target.value);
    }

    const sortedPosts = useMemo(() => {
        if (sorter) {
            return [...posts].sort((a, b) => b.id - a.id);
        }
        return posts
    }, [sorter, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, sortedPosts])

    return (
        <div className="container">
            <div className="input-group mt-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
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
                    <option defaultValue value="0">from Min to Max</option>
                    <option value="1">from Max to Min</option>
                </select>
            <div className="post-container">
                {sortedAndSearchedPosts.length
                    ?
                    sortedAndSearchedPosts.map((post, id) =>
                        <div className="card text-white bg-dark mb-3" key={post.id} style={{"maxWidth" : "18rem"}}>
                            <div className="card-header">{post.id}</div>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                            <button onClick={() => confirmDeletePost(post)} type="button" className="btn btn-danger">Delete
                            </button>
                        </div>
                )
                :
                <h3 className="mt-3">Posts not found</h3>
                }
            </div>
            <MyModal
                visible={showModal}
                saveBtnShow
                closeBtnShow
                onCancel={() => setShowModal(false)}
                onConfirm={() => deletePost()}
            >
            <h4>do you really </h4>
                </MyModal>



    </div>
    )
}

export default Posts;


