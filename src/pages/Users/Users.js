import React, {useState} from 'react';
import MyModal from '../../components/MyModal/MyModal';
import UserAdd from './UserAdd';
import UserList from './UserList';

const Users = () => {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([
        // {
        //     id: 1,
        //     name: 'Franko',
        //     age: 32,
        //     country: "USA"
        // },
        // {
        //     id: 2,
        //     name: 'Mikolo',
        //     age: 43,
        //     country: "Italy"
        // },
        // {
        //     id: 3,
        //     name: 'Petro',
        //     age: 20,
        //     country: "Russia"
        // },

    ]);

    return (
        <div className='container'>

            <UserList users={users}  setUsers={setUsers}/>
            <button className="btn btn-secondary"
                onClick={() => setShowModal(true)}
            >
                Add User
            </button>
            <MyModal
                visible={showModal}
                onCancel={() => setShowModal(false)}
                closeBtnShow
            >
                <UserAdd users={users} setUsers={setUsers} action={UserAdd} closeModal={() => setShowModal(false)}/>
            </MyModal>
        </div>
    );
};

export default Users;