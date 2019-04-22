import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    const userData = {
      username,
      password
    };
    setUser(userData);
    setUsername('');
    setPassword('');
  };
  return (
    <div style={{ textAlign: 'center' }}>
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
          placeholder="Username"
          onChange={event => setUsername(event.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button type="submit">Submit</button>

        {user && JSON.stringify(user, null, 2)}
      </form>
    </div>
  );
}
