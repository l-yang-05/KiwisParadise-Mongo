import React, { useState, useEffect } from 'react';
import { useTitle } from 'hookrouter'


const User = () => {
    useTitle("Kiwi's Paradise | Users")
    const [admin, setAdmin] = useState(null)

    let token = localStorage.getItem('token')

    const userAPI = async () => {
        try {
            const res = await fetch("api/users", {
                method: 'GET',
                headers: { token: token }
            });
            const text = await res.text();
            console.log("hi---", text)
            const response = text.length ? JSON.parse(text) : {}
            setAdmin(response);
        }
        catch (error) {
            throw error;
        }
    }

    useEffect(() => {
        userAPI()
    }, [])

    return (
        <div className="container-contact">
            <h1>Admin Page: Users</h1>
            <div className="container-products">
                {admin && admin.map((user, index) => {
                    return (
                        <div key={index} className="item">
                            <h3>{user.name}</h3>
                            <p> {user.email}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default User;