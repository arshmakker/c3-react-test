import React from "react";
import styles from "./PearsonUserProfile.module.css";

export class PearsonUserProfile extends React.Component {
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
        <div className={styles.personUserButtons}>Delete</div>
      </div>
    );
  }
}
