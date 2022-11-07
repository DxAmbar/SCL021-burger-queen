import { Welcome } from "./pages/Welcome"
import { Orders } from "./pages/Orders"
import { Kitchen } from "./pages/Kitchen"
import { Neworder } from "./pages/Neworder"
import { Chooseorder } from "./pages/Chooseorder"
import { Breakfast } from "./pages/Breakfast"
import { Food } from "./pages/Food"

import { Routes, Route } from "react-router-dom"; //Routes will wrap all our single Route. We will start with just one component.

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="Orders" element={<Orders />} />
        <Route path="Kitchen" element={<Kitchen />} />
        <Route path="Neworder" element={<Neworder />} />
        <Route path="Chooseorder" element={<Chooseorder />} />
        <Route path="Breakfast" element={<Breakfast />} />
        <Route path="Food" element={<Food />} />
      </Routes>
    </>
  )
}

export default App