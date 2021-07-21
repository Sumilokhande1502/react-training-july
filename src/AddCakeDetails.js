function AddCake() {
    let cakeCss={
  height: "30px",
  width: "30px",
  // marginLeft: "5px"
    };
  
    return (
      <div className="m-5">
        <form className="w-50 m-auto">
          <div className="form-group" >
            <label for="cake">Enter Full Name:</label>
            <input className="form-control" id="email" />
          </div>
  
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <label for="pwd">Price:</label>
                <input type="password" className="form-control" id="pwd" />
              </div>
              <div className="col-md-6">
                <label for="pwd">Weight:</label>
                <input type="password" className="form-control" id="pwd" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label className="mt-3" for="pwd">Description:</label>
              <textarea  className="form-control" id="pwd" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label for="pwd ">Type:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
  
            <div class="custom-control-lg custom-control custom-checkbox mt-3" >
            <label class="form-check-label mb-2 " for="flexCheckDefault" >
            Eggless
              </label>
              <input style={cakeCss}
                className="form-control"
                type="checkbox"
                value=""
                id="flexCheckDefault"         
              />
         
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <label for="pwd">Flavour:</label>
              <input type="password" className="form-control" id="pwd" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary mt-5">
            Submit
          </button>
        </form>
      </div>
    );
  }
  
  export default AddCake;
  