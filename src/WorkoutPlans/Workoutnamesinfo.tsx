import { useSharedState } from "../context/sharedState";
import Excersicename from "./ExcersiseName";
const Workoutnamesinfo: React.FC = () => {
  const { isInfo, workoutDetails } = useSharedState();

  if (isInfo)
    return (
      <>
        {" "}
        <div className="h-[30vh] px-10 py-10 flex flex-col border-[#5fdaff] border-t-2">
          <h2 className="text-2xl font-bold mb-2">Select a Workout</h2>
          <p className="text-lg">
            Please select a Muscle Group you want to Target from the above Tab.
          </p>
        </div>
      </>
    );

  return (
    <div className="h-[30vh] px-10 py-10 flex flex-col">
      <h2 className="text-xl font-bold mb-2">{workoutDetails.Title}</h2>
      <div className="flex flex-col gap-2">
        {workoutDetails.NameArr.map((exercise, index) => (
          <Excersicename
            key={index}
            Name={exercise.name}
            Steps={exercise.steps}
          />
        ))}
      </div>
    </div>
  );
};
export default Workoutnamesinfo;
