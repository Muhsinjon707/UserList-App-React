import userListStyles from "./index.module.css"
import Address from "../Address"
import Car from "../Car"
import User from "../User"

function UserList(props) {
    const {image, firstName, lastName, phone, email, address, cars} = props.data

    return (
      <div className={userListStyles.card}>
        <img
          className={userListStyles.cardImage}
          src={image}
          alt="User Image"
        />
        <div className="cardName">
            <User firstName={firstName} lastName={lastName}/>
        </div>
        <div className="phoneNumber">{phone}</div>
        <div className="email">{email}</div>
        <div className="address">
            <Address data = {address}/>
        </div>
        <div className="favoriteCars">
            <Car data = {cars}/>
        </div>
      </div>
    );
}

export default UserList;