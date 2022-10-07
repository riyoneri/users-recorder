import UserItem from "./UserItem";

const UsersList = (props) => {

  const deleteOneUser = user => {
    props.deleteUser(user.id)
  }

  return (
    <div>
      {props.users.map((user) => (
        <UserItem deleteOneUser={deleteOneUser} key={Math.random()} userItem={user} />
      ))}
    </div>
  );
};

export default UsersList;
