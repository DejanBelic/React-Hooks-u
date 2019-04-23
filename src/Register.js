import React, { useState } from 'react';

const initialFormState = {
    username: "",
    email:"",
    password: ""
};

export default function Register() {
    const [form, setForm] = useState(initialFormState);
    const [user,setUser] = useState(null);

    const handleChange = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = event => {
        event.preventDefault();
        setUser(form);
        setForm(initialFormState);
    };

    return ( <div style={{ textAlign: 'center' }}>
        <h2>Register</h2>
        <form
            action=""
            style={{
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={form.username}
            />
            <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
                value={form.email}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={form.password}
            />
            <button type="submit">Submit</button>
        </form>
        {user && JSON.stringify(user, null, 2)}
    </div>)
}