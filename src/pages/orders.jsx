import { Link } from "react-router-dom";

export const Orders = () => {
  return (

    <div className="general">
      <div className="tableInputs">
        <input type="table" id="table" placeholder="Mesa" />
        <input type="hour" id="hour" placeholder="Hora" />
        <Link to="/Chooseorder"><a className="createOrder">Crear Orden</a></Link>
      </div>
    </div>


  )
};