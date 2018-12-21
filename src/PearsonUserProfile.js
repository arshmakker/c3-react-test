import React from "react";
import styles from "./PearsonUserProfile.module.css";

export class PearsonUserProfile extends React.Component {
  _deleteUser = () => {
    this.props.deleteUser(this.props.id);
  };
  render() {
    return (
      <div className={styles.pearsonUserProfileBox}>
        <img
          className={styles.pearsonUserProfileAvatar}
          src={this.props.avatar}
          alt="User Profile"
        />
        <div className={styles.pearsonUserName}>
          {this.props.first_name} {this.props.last_name}
        </div>
        <div onClick={this._deleteUser} className={styles.personUserButtons}>
          Delete
        </div>
      </div>
    );
  }
}
