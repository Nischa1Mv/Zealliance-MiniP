import { Route, Routes } from "react-router-dom";

import Workoutinfo from "./workoutplans";
import Bmi from "./Bmi/bmi";
import Workoutlog from "./workoutlog";
import Foodlog from "./Foodlog/foodlog";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Login from "./Login";
import Signup from "./signup";

function Home() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Bmi />} />
          <Route path="workoutinfo" element={<Workoutinfo />} />
          <Route path="workoutlog" element={<Workoutlog />} />
          <Route path="/foodlog" element={<Foodlog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </DndProvider>
    </>
  );
}

export default Home;
