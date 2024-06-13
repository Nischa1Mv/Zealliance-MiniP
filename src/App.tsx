import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import Workoutlog from "./workoutlog";
import Workoutinfo from "./workoutplans";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Workoutinfo />} />
          <Route path="/workoutinfo" element={<Home />} />
          <Route path="/workoutlog" element={<Workoutlog />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/foodlog" element={<FoodLog />} />*/}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
