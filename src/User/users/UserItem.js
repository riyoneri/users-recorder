import styles from "./UserItem.module.css";

const UserItem = props => {

  const deleteThisUserHandler = () => {
    props.deleteOneUser(props.userItem)
  }

  return (
    <div className={styles.container} onClick={deleteThisUserHandler}>
      <div className={styles["container-inside"]}>
        <span>{props.userItem.name}</span>
        <span> ({props.userItem.age} years old)</span>
      </div>
    </div>
  );
};

export default UserItem;
