import { useState, useMemo, useEffect } from "react";

export const SecondPage = () => {
  const [users, setUsers] = useState<any>();

  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((json) => setUsers(json));
    console.log(users);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const userToDisplay = useMemo(() => {
    if (users) {
      return users.map((user: any) => <h2>{user.name}</h2>);
    }
  }, [users]);

  return (
    <div>
      <h3>users</h3>
      <button onClick={getUsers}>POBIERANIE USEROW</button>
      {userToDisplay}
    </div>
  );
};
