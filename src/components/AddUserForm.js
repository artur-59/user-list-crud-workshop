import React from "react";

const AddUserForm = (props) => {
  const { addUser } = props;
  const [newUser, setNewUser] = React.useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  return (
    <form onSubmit={(e) => addUser(e, newUser)}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newUser.name}
          placeholder="Name"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={newUser.username}
          placeholder="Username"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={newUser.email}
          placeholder="Email"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={newUser.phone}
          placeholder="Phone"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Website:
        <input
          type="text"
          name="website"
          value={newUser.website}
          placeholder="Website"
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Submit:
        <input type="Submit" placeholder="Add new user" />
      </label>
    </form>
  );
};

export default AddUserForm;
