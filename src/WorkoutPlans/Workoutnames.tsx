import React from "react";
import { useSharedState } from "../context/sharedState";

interface ExerciseName {
  name: string;
  steps: string[];
}
interface WorkoutnamesProps {
  Title: string;
  NameArr: ExerciseName[];
}

const Workoutnames: React.FC<WorkoutnamesProps> = ({ Title, NameArr }) => {
  const { setIsInfo, setWorkoutDetails, selectedTab, setSelectedTab } =
    useSharedState();
  const isSelected = selectedTab === Title;
  return (
    <div
      className={`md:px-4  md:py-3 flex md:w-[15%] md:h-fit cursor-pointer justify-center items-center transform translate-x-0  duration-90 px-2  ${
        isSelected
          ? " text-[#5fdaff] bg-slate-800 border-b-2 animate-fadeIn   border-[#5fdaff]"
          : ""
      } )
        `}
      onClick={() => {
        setIsInfo(false);
        setWorkoutDetails({ Title, NameArr });
        setSelectedTab(Title);
      }}
    >
      <div className="font-semibold text-xl flex whitespace-nowrap  ">
        {Title}
      </div>
    </div>
  );
};
export default Workoutnames;
