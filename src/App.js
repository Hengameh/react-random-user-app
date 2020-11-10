import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import UserListItem from "./components/UserListItem";
import Footer from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      errorMessage: "",
    };

    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickDelete(id) {
    const updatedList = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: updatedList,
    });
  }

  componentDidMount() {
    this.getUserList();
  }

  getUserList() {
    axios
      .get("https://randomuser.me/api/?results=25")
      .then((response) =>
        response.data.results.map((user) => ({
          id: `${user.login.uuid}`,
          name: `${user.name.first}`,
          lastName: `${user.name.last}`,
          gender: `${user.gender}`,
          username: `${user.login.username}`,
          country: `${user.location.country}`,
          nationality: `${user.nat}`,
          city: `${user.location.city}`,
          state: `${user.location.state}`,
          email: `${user.email}`,
          profileImage: `${user.picture.large}`,
        }))
      )
      .then((users) => {
        this.setState({
          users,
          isLoading: false,
        });
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          errorMessage: "Encountered Server Error. Please refresh your page...",
        });
      });
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <div className="user-list-app">
        <header>
          <h1>Manage your list of random users</h1>
          <h2>There are {users.length} users available...</h2>
          <p className="paragraph">
            Please feel free to delete any user you want from the list below.
            <br />
            Then refresh the page to start over.
          </p>
        </header>

        <ul className="grid-container fade-in">
          {!isLoading ? (
            users.map((user) => {
              return (
                <UserListItem
                  key={user.id}
                  user={user}
                  onClick={this.handleClickDelete}
                />
              );
            })
          ) : (
            <div className="loading message">
              <div className="spinning-circle"></div>
              Please wait, the page still loading...
            </div>
          )}
        </ul>

        {this.state.errorMessage && (
          <div className="error message">
            <div className="spinning-circle"></div>
            The server encounter an issue and is unable to complete your request.
          </div>
        )}

        {!isLoading && this.state.users.length === 0 && (
          <div className="list-empty message">
            Your list is empty. Please refresh...
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
