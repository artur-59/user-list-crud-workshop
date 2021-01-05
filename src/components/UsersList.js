import React from "react";
import axios from "axios";
import User from "./User";
import AddUserForm from "./AddUserForm";
import { v4 as uuidv4 } from "uuid";

const UsersList = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetchUsers();
  }, []);
  const fetchUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data));
  };
  const deleteUser = (userToDeleteId) => {
    const updatedUsers = users.filter((user) => user.id !== userToDeleteId);
    setUsers(updatedUsers);
  };

  const addUser = (e, newUser) => {
    console.log(newUser);
    e.preventDefault();
    //newUser.id = uuidv4();
    setUsers([...users, {...newUser, id: uuidv4()}]);
  };
  const editUser = (e, editedUser) => {
    e.preventDefault();
    //newUser.id = uuidv4();
    const { inEditMode, ...updatedUser } = editedUser;
    console.log(updatedUser);
    const newUserList = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(newUserList);
  };

  return (
    <div>
      <AddUserForm addUser={addUser} />
      <div>
        {users.map((user) => (
          <li key={user.id}>
            <User {...user} deleteUser={deleteUser} editUser={editUser} />
          </li>
        ))}
      </div>
    </div>
  );
};
export default UsersList;
