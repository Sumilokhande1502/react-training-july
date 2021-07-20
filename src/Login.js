import React, { Component } from "react";

class Login extends React.Component {
    constructor() {
        super();
        
        this.state = {
            errorMsg: null,
        }
    }
    
  user = {};
 
  handleEmail =  (e) => {
    this.user.email = e.target.value;
  };
  handlePassword = (e) => {
    this.user.password = e.target.value;
  };

  login = (e) => {
    console.log("User has entered login page", this.user.email);
    if (this.user.email === undefined && this.user.password === undefined) {
      //setErrorMess("login failure");
      //alert("login failure");
    }
    console.log('Ssssssssssssssssssss',this.user)
    // axios
    //   .post(`https://apifromashu.herokuapp.com/api/login`, user)
    //   .then((res) => {
    //     console.log(res);
    //     console.log(res.data);
    //     localStorage.setItem("Data", res['data'].token);
    //     props.history.push("/")
    //     setEnteredText("");
    //   });

    this.setState({
        errorMsg: "Invalid Credentials"
    })
  };

  render() {
    return (
      <div class="row mb-5">
        <div class="col-md-8 offset-md-4">
          <form className="w-50 ">
            <h1 className="alignCenter">Login Page</h1>
            <div class="form-group justify-content-start">
              <label className="mb-0" for="exampleInputEmail1">
                Email address
              </label>
              <input
                onChange={this.handleEmail}
                className="form-control mb-2"
                type="email"
                name=""
                placeholder="Enter Email"
              ></input>
              <label className="mb-0" for="exampleInputEmail1">
                Password
              </label>
              <input
                onChange={this.handlePassword}
                className="form-control mb-2"
                type="password"
                name=""
                placeholder="Enter Password"
              ></input>
            {this.state.errorMsg}
              <button
                className="btn btn-outline-primary form-control mt-2"
                onClick={this.login}
                type="button"
              >
                Login
              </button>
              
              <p className="mt-2">Not have an account? create a new account</p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
