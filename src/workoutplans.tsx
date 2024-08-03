import { workoutinfoArr } from "./workoutinfo";
import { SharedStateProvider } from "./context/sharedState";

const Paragraphguy = () => {
  return (
    <div
      id="paragraph"
      className="flex flex-col  gap-5 text-pretty  h-[29vh] pt-5 bg-black px-10"
    >
      <div className="font-bold text-5xl ">Calisthenics</div>

      <div className="text-2xl mt-4 ">
        The term calisthenics comes from the Greek words ‘Kalos’ meaning beauty
        and ‘Stenos’ which translates as strength.{" "}
      </div>
      <div className="mb-4 text-2xl">
        {" "}
        Calisthenics is a form of strength training that utilizes an
        individual's body weight as resistance to perform multi-joint, compound
        movements with little or no equipment
      </div>
    </div>
  );
};

import { useSharedState } from "./context/sharedState";
import { useState } from "react";
type ExerciseName = string[];

interface WorkoutnamesProps {
  Title: string;
  NameArr: {
    [key: string]: ExerciseName;
  };
}

const Workoutnames: React.FC<WorkoutnamesProps> = ({ Title, NameArr }) => {
  const { setIsInfo, setWorkoutDetails, selectedTab, setSelectedTab } =
    useSharedState();
  const isSelected = selectedTab === Title;
  return (
    <div
      className={`px-4 py-3 flex w-[15%] h-fit cursor-pointer justify-center items-center transform translate-x-0  duration-90  ${
        isSelected ? " text-[#5fdaff] border-b-2 border-[#5fdaff]" : ""
      }`}
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

// Workoutnamesinfo.tsx

const Workoutnamesinfo: React.FC = () => {
  const { isInfo, workoutDetails } = useSharedState();

  if (isInfo)
    return (
      <>
        {" "}
        <div className="h-[30vh] px-10 py-10 flex flex-col">
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
      <div>
        {Object.keys(workoutDetails.NameArr).map((name, index) => (
          <Excersicename
            key={index}
            Name={name}
            Steps={workoutDetails.NameArr[name]}
          />
        ))}
      </div>
    </div>
  );
};

// Excersicename.tsx

interface ExcersicenameProps {
  Name: string;
  Steps: string[];
}

const Excersicename: React.FC<ExcersicenameProps> = ({ Name, Steps }) => {
  const [Info, setInfo] = useState(false);

  return (
    <div className="">
      <div
        className="border-2 border-r-0 border-[#464646] "
        onClick={() => setInfo(!Info)}
      >
        <div className="px-8 py-2 flex font-medium text-base">
          <div className="flex gap-4">
            <div className="whitespace-nowrap">{Name}</div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 -960 960 960"
                width="30px"
                fill="#e8eaed"
              >
                <path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* change dis data when clicked  */}
      {Info && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <VideoOverlay setInfo={setInfo} Name={Name} Steps={Steps} />
        </div>
      )}
    </div>
  );
};

interface VideoOverlayProps {
  setInfo: React.Dispatch<React.SetStateAction<boolean>>;
  Name: string;
  Steps: string[];
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({
  setInfo,
  Name,
  Steps,
}) => {
  const [isOverlayVisible, setOverlayVisible] = useState(true); // State to manage overlay visibility

  const handlePlayClick = () => {
    // This function will handle play button click
    setOverlayVisible(!isOverlayVisible); // Hide the overlay
    // Additional logic to start playing the video can be added here
  };

  return (
    <div
      onClick={() => {
        setInfo(false);
      }}
      className=" h-full w-full bg-gray-50 bg-opacity-10 flex justify-center items-center "
    >
      <div
        className=" w-[75%] h-[70%] m-auto bg-black "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl bg-amber-50 text-black flex justify-center items-center h-[10%] font-bold mb-4">
          {Name}
        </h2>
        <div className="flex h-[87%] ">
          {/* Left panel */}
          <div className=" p-5 w-[50%]  ">
            <h1 className="text-4xl font-bold mb-2">
              Follow The Following Steps
            </h1>
            <ol type="1">
              {Steps.map((step, index) => (
                <li key={index} className="text-lg font-semibold">
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Right panel */}
          <div className="flex  w-[50%] h-full items-center justify-center">
            {/* Video player */}
            <div className=" relative aspect-video h-[50%]">
              <video className=" inset-0 w-full h-full object-cover" controls>
                <source src="your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Overlay */}
              {isOverlayVisible && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button
                    onClick={handlePlayClick}
                    className="text-white bg-gray-800 px-6 py-3 rounded-lg text-xl"
                  >
                    Play
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Workoutinfo = ({}) => {
  return (
    <>
      <div className="">
        <Paragraphguy />
      </div>
      <div className=" flex flex-col h-[55vh] overflow-auto mx-10 mt-6">
        <SharedStateProvider>
          <div className="items-center  flex overflow-auto max-h-full ">
            {workoutinfoArr.map((workout, index) => (
              <Workoutnames
                key={index}
                Title={workout.Title}
                NameArr={workout.NameArr}
              />
            ))}
          </div>
          <div>
            <Workoutnamesinfo />
          </div>
        </SharedStateProvider>
      </div>
    </>
  );
};

export default Workoutinfo;
