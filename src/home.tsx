import { Route, Routes } from "react-router-dom";

import Workoutinfo from "./workoutplans";
import Bmi from "./bmi";
import Workoutlog from "./workoutlog";

function Home() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Bmi />} />
        <Route path="workoutinfo" element={<Workoutinfo />} />
        <Route path="workoutlog" element={<Workoutlog />} />
        {/* <Route path="/foodlog" element={<Foodlog />} /> 
         <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  );
}

export default Home;
