import { BrowserRouter, Route, Routes } from "react-router-dom";
import Workoutlog from "./workoutlog";
import Workoutinfo from "./workoutplans";

import Bmi from "./bmi";
import Foodlog from "./foodlog";
function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bmi />} />
          <Route path="workoutinfo" element={<Workoutinfo />} />
          <Route path="workoutlog" element={<Workoutlog />} />
          {
            /* <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />*/
            <Route path="/foodlog" element={<Foodlog />} />
          }
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
