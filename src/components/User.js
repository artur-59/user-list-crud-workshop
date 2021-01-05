import React from 'react';

const User = (props) => {
    const { name, username, email, phone, website, deleteUser, id, editUser } = props;
    const [editedUser, setEditedUser] = React.useState({
        name: name,
        username: username,
        email: email,
        phone: phone,
        website: website,
        id: id
      });
      const [inEditMode, setInEditMode] = React.useState(false);
    
      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEditedUser({ ...editedUser, [name]: value });
      };
    return (
        <div>
        {/*<div>
            <h3>Name: {name}</h3>
            <h4>Username: {username}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Website: {website}</h4>
            <button onClick={() => deleteUser(id)}>Delete User</button>
        </div>*/}
        {inEditMode ? (
          <div>
            <form
              onSubmit={(e) => {
                editUser(e, editedUser);
                setInEditMode(false);
              }}
            >
              <label>Name: </label>
              <input
                onChange={handleChange}
                defaultValue={name}
                name="name"
              />
              <br />
              <label>Username: </label>
              <input
                onChange={handleChange}
                defaultValue={username}
                name="username"
              />
              <br />
              <label>Email: </label>
              <input
                onChange={handleChange}
                defaultValue={email}
                name="email"
              />
              <br />
              <label>Phone: </label>
              <input
                onChange={handleChange}
                defaultValue={phone}
                name="phone"
              />
              <br />
              <label>Website: </label>
              <input
                onChange={handleChange}
                defaultValue={website}
                name="website"
              />
              <br />
              <button type="submit">Confirm edit</button>
            </form>
          </div>
        ) : (
          <div>
            <h3>Name: {name}</h3>
            <h4>Username: {username}</h4>
            <h4>Email: {email}</h4>
            <h4>Phone: {phone}</h4>
            <h4>Website: {website}</h4>
            <button onClick={() => deleteUser(id)}>Delete User</button>
          </div>
        )}
        <button
          onClick={() => setInEditMode(!inEditMode)}
        >
          {inEditMode ? "Cancel Edit" : "Edit User"}
        </button>
      </div>
    )
}

export default User;
