import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/foodlog" element={<FoodLog />} />
          <Route path="/WorkoutPlans" element={<WorkoutPlans />} />
          <Route path="/Workoutlog" element={<Workoutlog />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
