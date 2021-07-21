let carousel1 = "carousel1.jpg";
let carousel2 = "carousel2.png";
let carousel3 = "carousel4.jpg";

export function Carousel() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height: "30em"}} src={carousel1} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{height: "30em"}} src={carousel2} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img style={{height: "30em"}} src={carousel3} class="d-block w-100" alt="..." />
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  );
}
