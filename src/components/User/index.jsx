import userStyles from "./index.module.css"

function User(props) {
    return (
      <div className={userStyles.userName}>
        {props.firstName} {props.lastName}
      </div>
    );
}

export default User;