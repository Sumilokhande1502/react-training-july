import {useState, setState} from 'react';

function Signup(){
    let style={textDecoration: 'none'}
    var [enteredText, setEnteredText] = useState();
    var [errorMessage, setErrorMessage] = useState();

  let register = {};
  var registerName = function (e) {
    register.name = e.target.value;
  };
  var registerPassword = function (e) {
    register.password = e.target.value;
  };
  var registerEmail = function (e) {
    register.email = e.target.value;
  };

  var registerData = function (e) {
    if (
      register.email === undefined ||
      register.password === undefined ||
      register.name === undefined
    ) {
      setErrorMessage("please provide details");
    }
  };
    return(
        <div class="col-md-8 offset-md-4">
      <form className="w-50">
        <h1 className="alignCenter">Sign Up Page</h1>
        <label className="mb-0" for="exampleInputEmail1">
          Name
        </label>
        <input
          value={enteredText}
          onChange={registerName}
          className="form-control mb-2"
          type="name"
          name=""
          placeholder="Enter Name"
        ></input>
        <label className="mb-0" for="exampleInputEmail1">
          {" "}
          Email
        </label>
        <input
          value={enteredText}
          onChange={registerEmail}
          className="form-control mb-2"
          type="name"
          name=""
          placeholder="Enter Email"
        ></input>
        <label className="mb-0" for="exampleInputEmail1">
          {" "}
          Password
        </label>
        <input
          value={enteredText}
          onChange={registerPassword}
          className="form-control mb-2"
          type="password"
          name=""
          placeholder="Enter Password"
        ></input>
        {errorMessage}
        <button
          onClick={registerData}
          className="btn btn-outline-primary form-control mt-2"
          type="button"
        >
          Register
        </button>
        <p className="mt-2">Already have an account? Login Here</p>
      </form>
    </div>
    )
}

export default Signup