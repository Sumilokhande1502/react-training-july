import './App.css';
import Navbar from './Navbar';
import Login from './Login';
import {Carousel} from './Carousel';
import {Books} from './Books';

function App() {
  let Book1 = {
    title:"ABC",
    price: 600,
    description:"test"
  }
  let Book2 = {
    title:"XYZ",
    price: 500,
    description:"test"
  }
  return (
    <div>
     <Navbar />
     <Login />
     <Carousel />
      <div class="row">
        <Books data={Book1}/>
        <Books data={Book2} />
      </div>
    </div>
  );
}

export default App;
