function List(props) {
  return (
    <>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-start">
          <div className="ms-2 me-auto">
            <div className="fw-bold">{props.data.Brand}</div>
           {props.data.price}
          </div>
          <button type="button" onClick={()=>props.removecart(props.data.id) }class="btn btn-danger btn-sm">Remove</button>
      
        </li>
      </ul>
    </>
  );
}
export default List;
