import React, {useState} from 'react';

const UserAdd = ({users, setUsers}) => {
    const [user, setUser] = useState({});


    const onChange = (e) =>{
        const field = e.target.id;
        setUser({...user, [field]:e.target.value})
    }

    const addNewUser = () => {
        setUsers([...users, user])
    }

    const values = {
        name: 'text',
        age: 'number',
        country: 'text'
    }

    return (
        <>
            {Object.keys(values).map((value, index) =>
                <input
                    className={'user_input'}
                    id = {value}
                    key = {index}
                    type = {values[value]}
                    placeholder={`Input your ${value}`}
                    onChange={onChange}
                />
            )}
            <button onClick={addNewUser}>Add new user</button>
        </>
    );
};

export default UserAdd;
