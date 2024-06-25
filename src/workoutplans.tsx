import { workoutinfoArr } from "./workoutinfo";
import { SharedStateProvider } from "./context/sharedState";

const Paragraphguy = () => {
  return (
    <div
      id="paragraph"
      className="flex flex-col  gap-5 text-pretty  h-[29vh] mt-6"
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

interface WorkoutnamesProps {
  Title: string;
  NameArr: string[];
}
import { useSharedState } from "./context/sharedState";
import { useState } from "react";
const Workoutnames: React.FC<WorkoutnamesProps> = ({ Title, NameArr }) => {
  const { setIsInfo, setWorkoutDetails } = useSharedState();

  return (
    <div
      className="px-4 py-3 border-b-1 border-t-0 border-l-0 border border-r-1 flex w-[15%] h-fit cursor-pointer justify-center items-center"
      onClick={() => {
        setIsInfo(false);
        setWorkoutDetails({ Title, NameArr });
      }}
    >
      <div className="font-semibold text-xl flex whitespace-nowrap">
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
        {workoutDetails.NameArr.map((name, index) => (
          <Excersicename key={index} Name={name} />
        ))}
      </div>
    </div>
  );
};

// Excersicename.tsx

interface ExcersicenameProps {
  Name: string;
}

const Excersicename: React.FC<ExcersicenameProps> = ({ Name }) => {
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
          <VideoOverlay />
        </div>
      )}

      {/* Content that should remain visible */}
      {/* <div className="border-2 border-t-0 h-[20vh] min-w-[15vw] px-8 py-2 border-white ">
        <div className="flex flex-col gap-4">
          <span>Step-1:</span>
          <span>Step-2:</span>
          <span>Step-3:</span>
        </div>
      </div> */}
    </div>
  );
};

const VideoOverlay = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(true); // State to manage overlay visibility

  const handlePlayClick = () => {
    // This function will handle play button click
    setOverlayVisible(false); // Hide the overlay
    // Additional logic to start playing the video can be added here
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 ">
      <div className="max-w-4xl mx-auto flex">
        {/* Left panel */}
        <div className="flex-1 p-8">
          <h2 className="text-3xl font-bold mb-4">Some Text Here</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vitae...
          </p>
        </div>

        {/* Right panel */}
        <div className="flex-1 relative">
          {/* Video player */}
          <div className="relative aspect-video">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              controls
            >
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
  );
};

const Workoutinfo = ({}) => {
  return (
    <>
      <div>
        <Paragraphguy />
      </div>
      <div className="border border-white flex flex-col h-[55vh] overflow-auto">
        <SharedStateProvider>
          <div className="items-center rounded-xl flex overflow-auto max-h-full ">
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
