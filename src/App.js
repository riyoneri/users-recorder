import { useState } from "react";

import Card from "./UI/Card";
import FormContainer from "./User/Form/FormContainer";
import UsersList from "./User/users/UsersList";

const App = () => {
  const [usersArray, updateUserArray] = useState([])

  const updateUsersHandler = newUser => {
    updateUserArray(prevArray => {
      const prevUsers = [...prevArray]
      prevUsers.unshift({ name: newUser.name, age: newUser.age, id: Math.random() })
      return prevUsers
    })
  }

  const deleteUserHandler = userId => {
    updateUserArray(prevArray => {
      const updatedUsers = usersArray.filter((user) => user.id !== userId);
      return updatedUsers
    })
  }


  return (
    <div>
      <Card>
        <FormContainer updateUsers={updateUsersHandler} />
      </Card>
      <Card>
        <UsersList deleteUser={deleteUserHandler} users={usersArray} />
      </Card>
    </div>
  );
};

export default App;
