import { Link } from "react-router-dom";
import { ProductContainer } from "../components/ProductContainer";
import Menu from "../db.json"

export const Food = () => {
  return (
    <><div className="general">
      <picture className="comida">
        <img src="src/resources/comida.png" alt="comida" />
      </picture>
    </div>
      <ProductContainer>
      </ProductContainer>
    </>
  )
};