import { SharedStateProvider } from "../context/sharedState";
import { ref, get } from "firebase/database";
import { db } from "../firebase";
import Paragraphguy from "./Paragraphguy";
import Workoutnames from "./Workoutnames";
import Workoutnamesinfo from "./Workoutnamesinfo";
import { useEffect, useState } from "react";

// Workoutnamesinfo.tsx

// Excersicename.tsx

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
            <div
              className="flex  border bg-slate-300 font-bold text-lg text-black mt-10 w-fit px-2 py-1 rounded-full cusor-pointer md:hidden gap-2  justify-center items-center"
              onClick={() => {
                setIsmenubar(!ismenubar);
              }}
            >
              <button>Muscles</button>
              <svg
                className=""
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#00000"
              >
                <path d="m536-84-56-56 142-142-340-340-142 142-56-56 56-58-56-56 84-84-56-58 56-56 58 56 84-84 56 56 58-56 56 56-142 142 340 340 142-142 56 56-56 58 56 56-84 84 56 58-56 56-58-56-84 84-56-56-58 56Z" />
              </svg>
            </div>
          </div>
        </SharedStateProvider>
      </div>
    </>
  );
};

export default Workoutinfo;
