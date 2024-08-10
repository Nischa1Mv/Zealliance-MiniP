import { SharedStateProvider } from "./context/sharedState";
import { ref, get } from "firebase/database";
import { db } from "./firebase";

const Paragraphguy = () => {
  return (
    <div id="paragraph" className="flex flex-col py-2 px-4   text-pretty   ">
      <div className="font-bold text-4xl pb-2 ">Calisthenics</div>
      <div className="text-xl font-medium py-2 ">
        <div>
          The term calisthenics comes from the Greek words ‘Kalos’ meaning
          beauty and ‘Stenos’ which translates as strength.{" "}
        </div>
        <div>
          {" "}
          Calisthenics is a form of strength training that utilizes an
          individual's body weight as resistance to perform multi-joint,
          compound movements with little or no equipment
        </div>
      </div>
    </div>
  );
};

import { useSharedState } from "./context/sharedState";
import { useEffect, useState } from "react";

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
      className={`px-4 py-3 flex w-[15%] h-fit cursor-pointer justify-center items-center transform translate-x-0  duration-90  ${
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

// Workoutnamesinfo.tsx

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

// Excersicename.tsx

interface ExcersicenameProps {
  Name: string;
  Steps: string[];
}

const Excersicename: React.FC<ExcersicenameProps> = ({ Name, Steps }) => {
  const [Info, setInfo] = useState(false);

  return (
    <div className="">
      <div className="border border-[#464646]  " onClick={() => setInfo(!Info)}>
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
        className=" w-[75%] h-[70%] m-auto bg-[#16171b] "
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl bg-amber-50 text-black flex justify-center items-center h-[10%] font-bold mb-4">
          {Name}
        </h2>
        <div className="flex h-[87%] ">
          {/* Left panel */}
          <div className=" p-5 w-[45%] flex-col flex">
            <h1 className="text-4xl font-bold mb-10 mt-5 ">
              Follow these Steps
            </h1>

            {Steps.map((step, index) => (
              <div key={index} className="text-2xl font-semibold mb-6 pl-4">
                <span className="text-yellow-200">
                  {" "}
                  Step-
                  {index + 1}
                  {" -> "}
                </span>
                {step}
              </div>
            ))}
          </div>

          {/* Right panel */}
          <div className="flex  w-[55%] h-full items-center justify-center ">
            {/* Video player */}
            <div className=" relative aspect-video w-[90%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
  const [workoutinfodata, setworkoutinfodata] = useState([]);
  useEffect(() => {
    const getvariations = async () => {
      try {
        const dbRef = ref(db, "workouts");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setworkoutinfodata(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getvariations();
  }, []);

  return (
    <>
      <div className="flex flex-col px-4">
        <div className="">
          <Paragraphguy />
        </div>
        <SharedStateProvider>
          <div className=" w-full  border h-[60vh]">
            <div className="flex sticky top-0">
              {workoutinfodata.map((workout, index) => (
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
          </div>
        </SharedStateProvider>
      </div>
    </>
  );
};

export default Workoutinfo;
