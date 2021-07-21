import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './Signup';
import Search from './Search';
import Cakelist from './CakeList';
import CakeDetails from './CakeDetails';
import AddCakeDetails from './AddCakeDetails';
import Home from './Home';
import PageNotFound from './PageNotFound';

import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";


function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} />
          <Route path='/cake' exact component={Cakelist}/>
          <Route path='/addcake' exact component={AddCakeDetails}/>
          <Route path='/cake:id' exact component={CakeDetails}/>
          <Route exact path="**" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
