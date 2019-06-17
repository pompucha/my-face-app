import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  handleLogin = (user, history) => {
    axios.post ("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/")
      })
      .catch( res => {
        console.log(res);
    })
  };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/")
      })
      .catch( err => {
        console.log(err);
      })
  };

  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push("/login")
      })
      .catch( err => {
        console.log(err)
      })
  };

  render() {
    const { user, } = this.state;
    return (
      <AuthContext.Provider value={{
        user,
        authenticated: user !== null,
        handleLogin: this.handleLogin,
        handleRegister: this.handleRegister,
        handleLogout: this.handleLogout,
        setUser: (user) => this.setState({ user, }),
      }}>
        { this.props.children }
      </AuthContext.Provider>
    );
  };
};





export default AuthProvider;