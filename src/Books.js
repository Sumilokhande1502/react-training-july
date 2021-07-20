export function Books(props) {
  return (
    <div class="card" style={{ width: "16rem" }}>
      <img
        src="..."
        style={{ height: "18rem" }}
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{props.data.title}</h5>
        <p class="card-text">
          {props.data.price}
        </p>
        <p class="card-text">
          {props.data.description}
        </p>
      </div>
    </div>
  );
}
