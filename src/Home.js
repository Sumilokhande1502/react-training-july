import {Cake} from './Cake';
import {Carousel} from './Carousel';

  function Home (){
      return (
          <div className="container-fluid">
            <Carousel />
            {/* <div class="row">
                <Cake data={Cake1}/>
                <Cake data={Cake2} />
            </div> */}
          </div>
      )
  }

  export default Home