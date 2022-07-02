function Card(props) {
  return (
    <>
      <div className="card" style={{width: "18rem"}}>
        <img src={props.data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.data.Brand}</h5>
          <p className="card-text">{props.data.des}</p>
          <a href="#"class="btn btn-primary">Price : {props.data.price}</a>
          <button type="button" onClick={()=>props.handletocart(props.data.id) } class="btn btn-warning buy">Buy</button>
        </div>
      </div>
    </>
  );
}
export default Card;
