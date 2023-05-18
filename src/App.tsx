import React from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { User, Item, Review, Admin } from "./types";
import { debug } from "console";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [items, setItems] = useState<Item[]>([]);

  var tempUser: User = {
    id: "1",
    username: "exampleUser",
    avg_rating: 4.5,
    reviews: []
  };

  const [new_user, setNewUser] = useState<User>(tempUser);

  const [new_item, setNewItem] = useState<Item>();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));

    axios
      .get("http://127.0.0.1:5000/api/items")
      .then((response) => setItems(response.data))
      .catch((error) => console.log(error));
  }, []);

  // useEffect(() => {
  //   axios.post('http://127.0.0.1:5000/api/users', new_user)
  //     .then(response => console.log(response.data))
  //     .catch(error => console.log(error));
  // }, [new_user]);

  // useEffect(() => {
  //   axios.post('http://127.0.0.1:5000/api/items', new_item)
  //     .then(response => console.log(response.data))
  //     .catch(error => console.log(error));
  // }, [new_item]);

  const handleAddUser = () => {
    axios
      .post("http://127.0.0.1:5000/api/users", {username: new_user.username})
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Welcome to My E-commerce App</h1>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
      <h2>Add User</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddUser();
        }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          placeholder="Username"
          defaultValue={""}
          onChange={(event) => {
            setNewUser({ ...new_user, username: event.target.value });
          }}
        />
        <button type="submit">Add User</button>
        
      </form>
      <h2>Items- Their Sellers</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.seller}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
