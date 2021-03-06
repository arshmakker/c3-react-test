import React, { Component } from "react";
import { PearsonUserProfile } from "./PearsonUserProfile";
import styles from "./PearsonUsers.module.css";
import fetchUsers from "./services/fetchUsers";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id: 4,
          first_name: "Eve",
          last_name: "Holt",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
        },
        {
          id: 5,
          first_name: "Charles",
          last_name: "Morris",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
        },
        {
          id: 6,
          first_name: "Tracey",
          last_name: "Ramos",
          avatar:
            "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
        }
      ]
    };
  }

  componentDidMount() {
    this._fetchUsers();
  }
  _fetchUsers = async (page = 1, per_page = 10) => {
    try {
      const newUsers = await fetchUsers(page, per_page);
      this._udpateUsersInState(newUsers);
    } catch (error) {}
  };

  _udpateUsersInState = (newUsers = []) => {
    let users = this._deleteDuplicates([...this.state.users, ...newUsers]);
    this.setState({ users });
  };

  _deleteDuplicates = users =>
    users.filter(
      (user, index, users) => index === users.findIndex(u => u.id === user.id)
    );

  _deleteUserById = id => {
    let users = [...this.state.users];
    let indexOfUserToDelete = users.findIndex(user => user.id === id);
    users = [
      ...users.slice(0, indexOfUserToDelete),
      ...users.slice(indexOfUserToDelete + 1)
    ];
    this.setState({
      users
    });
  };

  _getUsersInfo = (arrayUsers = []) =>
    arrayUsers.map(user => (
      <PearsonUserProfile
        key={user.id}
        id={user.id}
        first_name={user.first_name}
        last_name={user.last_name}
        avatar={user.avatar}
        deleteUser={this._deleteUserById}
      />
    ));

  render() {
    const usersInfo = this._getUsersInfo(this.state.users);
    return (
      <div>
        <h1 className={styles.pearsonUserHeading}>Pearson User Management</h1>
        <div className={styles.pearsonUsers}>{usersInfo}</div>
      </div>
    );
  }
}
