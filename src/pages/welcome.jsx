import { Link } from "react-router-dom";


export const Welcome = () => {
  return (

    <>
      <div className="general">
        <picture className="bienvenido">
          <img src="src/resources/bienvenido.png" alt="bienvedida" />
        </picture>

        <div className="inputs">
          <input type="text" id="user" placeholder="Usuario" />
          <input type="password" id="password" placeholder="Contraseña" />
          <Link to="/Orders"><a className="logIn">Ingresar</a></Link>
        </div>
      </div></>
  )
};

