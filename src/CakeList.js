import {Cake} from "./Cake"

let cake = {
    cakeid:12345,
    name:"Chocolate Truffle",
    price:500,
    image:"truffle.jpeg"
  }
  
  let cake2 = {
    cakeid:56789,
    name:"Fruit Cake",
    price:800,
    image:"fruit.webp"
  }
function CakeList(props){
  
    return (
        <div>
            <div className="row">
            <Cake history={props.history} data={cake}/>
            <Cake history={props.history} data={cake2}/>
            </div>
        </div>
    )
}

export default CakeList
