import React, { useState, useEffect } from "react";
import { BrowserRouter,Link,withRouter } from 'react-router-dom';



function Navbar(props) {
  let [search, setSearch] = useState();

  function handleSearch(e) {
    // alert("welcome");
    e.preventDefault();
    let value1 = document.getElementById("searchValue").value;
     setSearch(value1);
    // console.log("......", value1);
    var url = "/search?q="+value1
    props.history.push(url)
  }
  return (
    <nav class="navbar navbar-light bg-light">
      <Link to='/cake'>  Cake Details</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <form class="form-inline">
        <input
        id="searchValue"
          class="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={handleSearch} class="btn btn-outline-success my-2 my-sm-0" type="button">
          Search
        </button>
      </form>
      <Link to="/login"><button class="btn btn-outline-primary my-2 my-sm-0" type="button">
          Login
        </button></Link>
        <Link to='/addcake'>
          <button
        
            className="btn btn-outline-success my-2 my-sm-0 ml-2"
            type="submit"
          >
          Add Cake Details
          </button>
          </Link>
    </nav>
  );
}

export default Navbar;
