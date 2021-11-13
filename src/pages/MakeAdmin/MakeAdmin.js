import React, { useState } from 'react';
import '../MakeAdmin/MakeAdmin.css'
const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [successAdmin, setSuccessAdmin] = useState(false);
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
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccessAdmin(true);
                }
            }
            )

        e.preventDefault();
    }
    return (

        <div className='adminDiv'>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminForm} className='adminForm'>
                <input type="email" onBlur={handleEmail} placeholder='email' required />
                <br /><br />
                <input type="submit" value="Make Admin" />
            </form>
            {successAdmin && alert('Made an Admin Successfully')}
        </div>
    );
};

export default MakeAdmin;