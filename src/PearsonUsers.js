import React, { Component } from "react";

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
    let jsonObj = await fetch(
      `https://reqres.in/api/users?page=${page}&per_page=${per_page}`
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok.");
    });
    const users = jsonObj.data;
    this._udpateUsersInState(users);
  };

  _udpateUsersInState = (newUsers = []) => {
    let users = [...this.state.users, ...newUsers];
    this.setState({ users });
  };

  _getUsersInfo = (arrayUsers = []) =>
    arrayUsers.map(user => (
      <div key={user.id}>
        <div>{user.first_name}</div>
        <div>{user.last_name}</div>
        <div>{user.avatar}</div>
      </div>
    ));

  render() {
    const usersInfo = this._getUsersInfo(this.state.users);
    return (
      <div className="pearon-users">
        <h1>Pearson User Management</h1>
        {usersInfo}
      </div>
    );
  }
}
