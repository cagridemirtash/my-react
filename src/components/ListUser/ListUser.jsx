import db from "../../fakeDB.json";
import styles from "./ListUser.module.css";
const ListUser = () => {
  return (
    <div>
      <h1>List User</h1>
      <ul className={styles.listType}>
        {db
          .filter((user) => user.is_active === true)
          .map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default ListUser;
