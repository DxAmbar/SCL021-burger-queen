import { welcome } from "./pages/welcome"
import { orders } from "./pages/orders"
import { kitchen } from "./pages/kitchen"
import { neworder } from "./pages/neworder"
import { chooseorder } from "./pages/chooseorder"
import { breakfast } from "./pages/breakfast"
import { food } from "./pages/food"

import { Routes, Route } from "react-router-dom"; //Routes will wrap all our single Route. We will start with just one component.

const App = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<welcome />} />
    <Route path="orders" element={<orders />} />
    <Route path="kitchen" element={<kitchen />} />
    <Route path="neworder" element={<neworder />} />
    <Route path="chooseorder" element={<chooseorder />} />
    <Route path="breakfast" element={<breakfast />} />
    <Route path="food" element={<food />} />
    </Routes>
    </>
  )
}

export default App