import { SharedStateProvider } from "./context/sharedState";
import { ref, get } from "firebase/database";
import { db } from "./firebase";

const Paragraphguy = () => {
  return (
    <div
      id="paragraph"
      className="flex flex-col md:py-2 md:px-4 text-pretty    "
    >
      <div className="font-bold md:text-4xl md:pb-2 text-2xl">Calisthenics</div>
      <div className="md:text-xl font-medium md:py-2 text-medium ">
        <div>
          The term calisthenics comes from the Greek words ‘Kalos’ meaning
          beauty and ‘Stenos’ which translates as strength.{" "}
        </div>
        <div className="md:block hidden">
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
      className=" h-full w-full bg-gray-50 bg-opacity-10 flex justify-center items-center -z-50"
    >
      <div
        className=" md:w-[75%] md:h-[70%]  h-full  md:m-auto  bg-[#16171b] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <h2 className="text-3xl md:bg-amber-50 md:text-black text-yellow-300 flex justify-center py-2 items-center md:h-[10%] font-bold md:mb-2 ">
            {Name}
          </h2>
          <div className="absolute right-3 top-3 cursor-pointer md:hidden block">
            <svg
              onClick={() => {
                setInfo(false);
              }}
              xmlns="http://www.w3.org/2000/svg"
              height="27px"
              viewBox="0 -960 960 960"
              width="27px"
              fill="#FFFFFF"
            >
              <path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
            </svg>
          </div>
        </div>
        <div className="flex md:h-[87%] md:flex-row flex-col md:flex-auto flex-1   ">
          {/* Left panel */}
          <div className="  px-5 md:w-[45%] md:order-1 order-2 flex-col  flex ">
            <h1 className="md:text-2xl  text-medium font-bold  ">
              Follow these Steps
            </h1>

            {Steps.map((step, index) => (
              <div
                key={index}
                className="md:text-xl text-balance text-md font-medium md:font-semibold my-2"
              >
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
          <div className="flex  md:w-[55%] md:order-1 order-1  h-full items-center justify-center border-white md:mb-0 mb-5">
            {/* Video player */}
            <div className=" relative aspect-video w-full md:w-[93%] border-white">
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
      className={`md:px-4 md:py-3 flex md:w-[15%] md:h-fit cursor-pointer justify-center items-center transform translate-x-0  duration-90 px-2  ${
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

const Workoutinfo = ({}) => {
  const [ismenubar, setIsmenubar] = useState(false);
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
          <div className=" md:w-full flex border md:h-[60vh] h-[68vh] mt-2 flex-col relative items-center md:items-stretch pb-3 ">
            <div className="md:top-0 md:flex hidden items-stretch ">
              {workoutinfodata.map((workout, index) => (
                <Workoutnames
                  key={index}
                  Title={workout.Title}
                  NameArr={workout.NameArr}
                />
              ))}
            </div>
            {ismenubar && (
              <>
                <div
                  onClick={() => {
                    setIsmenubar(!ismenubar);
                  }}
                  className={`z-50  flex flex-wrap transition-transform duration-500 ease-out ${
                    ismenubar ? "animate-slideUp" : "opacity-0 translate-y-full"
                  }  shadow-lg p-4 rounded-lg absolute bottom-14`}
                >
                  {workoutinfodata.map((workout, index) => (
                    <Workoutnames
                      key={index}
                      Title={workout.Title}
                      NameArr={workout.NameArr}
                    />
                  ))}
                </div>
              </>
            )}

            <div className="flex-1  w-full ">
              <Workoutnamesinfo />
            </div>
            <button
              className="border bg-slate-300 text-black mt-10 w-fit px-2 py-1 rounded-xl cusor-pointer md:hidden block"
              onClick={() => {
                setIsmenubar(!ismenubar);
              }}
            >
              Muscle
            </button>
          </div>
        </SharedStateProvider>
      </div>
    </>
  );
};

export default Workoutinfo;
