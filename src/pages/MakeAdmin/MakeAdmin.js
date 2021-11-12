import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleAdminForm = e => {
        const user = { email }
        fetch('http://localhost:5000/customers/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data =>
                alert('Admin added successfully Done!')
            )
        e.target.value = '';
        e.preventDefault();
    }
    return (

        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminForm}>
                <input type="email" onBlur={handleEmail} placeholder='email' required />
                <br /><br />
                <input type="submit" value="Make Admin" />
            </form>
        </div>
    );
};

export default MakeAdmin;