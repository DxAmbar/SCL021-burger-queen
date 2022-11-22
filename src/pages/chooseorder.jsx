import { Link } from "react-router-dom";

export const Chooseorder = () => {
  return (
    <div className="options">
    <Link to="/Breakfast"><a className="toBreakfast">Desayuno</a></Link>
    <Link to="/Food"><a className="toFood">Comida</a></Link>
    </div>
  )
};