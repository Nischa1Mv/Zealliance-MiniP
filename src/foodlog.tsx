import { useState, useEffect } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { ref, get } from "firebase/database";
import { db } from "./firebase";

const Foodlog = () => {
  return (
    //this is the main page
    <div className="  flex-col flex md:flex-row gap-4 px-2 py-6 justify-center">
      <div className="md:w-[48%] md:min-h-[82vh] w-full max-h-full h-[80vh]  ">
        {" "}
        <Caloriesfood />
      </div>

      <div className="md:flex md:w-[48%] h-full md:min-h-[82vh] hidden">
        <Foodbrowse />
      </div>
    </div>
  );
};
export default Foodlog;

const Foodbrowse = () => {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllfood = async () => {
      try {
        const dbRef = ref(db, "foodItems");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setFood(Object.values(snapshot.val())); // Convert object to array
          // console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAllfood();
  }, []);

  return (
    //this will contain the draggable ellements
    // foodbrowse
    <div
      id="right"
      className="border-[#464646] md:border-4  md:px-10 md:py-6 flex flex-col md:gap-6 rounded-[8px] w-full gap-4  sm:relative "
    >
      <div className="flex rounded-[8px]  px-2 py-1 border-[#464646] border-2 ">
        <input
          className=" text-white bg-transparent focus:outline-none px-2 w-full py-2 "
          type="text"
          placeholder="food..."
        />

        {/* searchbar */}
        <div className=" flex justify-center items-center">
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#cfcfcf"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
      </div>
      <div
        className=" h-full flex flex-col gap-4 md:gap-6 rounded-xl "
        draggable="false"
      >
        {loading && (
          <>
            <div className="relative flex justify-center mt-10 text-white text-2xl font-bold leading-tight tracking-widest z-10 animate-shift">
              <div
                data-glitch="Loading..."
                className="absolute flex justify-center inset-0 opacity-80 text-purple-600 animate-glitch -z-10"
              >
                Loading...
              </div>
              <div
                data-glitch="Loading..."
                className="absolute flex justify-center inset-0 opacity-80 text-green-400 animate-glitch -z-20"
              >
                Loading...
              </div>
              Loading...
            </div>
          </>
        )}{" "}
        {food.map((food) => {
          return (
            <div className="relative">
              <Fooddata
                key={food.id}
                cal={food.cal}
                name={food.name}
                isx={false}
                id={food.id}
                handleClick={() => {}}
              />
              <div className="absolute md:top-3 top-2 right-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
interface FProps {
  isx: boolean;
  name: string;
  id: number;
  cal: number;
  handleClick: () => void;
}

const Fooddata: React.FC<FProps> = ({ isx, name, id, handleClick }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "food",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    //this should be dragged

    <div
      ref={drag}
      draggable
      className="md:px-4 px-2 py-1  rounded-[6px] font-bold text-lg md:py-2 flex relative border-2  "
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div>{name}</div>
      {isx && (
        <div className="absolute right-5 flex items-center justify-center text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
            onClick={handleClick}
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
      )}
    </div>
  );
};

interface Food {
  id: number;
  name: string;
  cal: number;
  // Add more properties if necessary
}

const Caloriesfood: React.FC = () => {
  const [hasElements, setHasElements] = useState<boolean>(false);
  const [space, setSpace] = useState<Food[]>([]);
  const [Ltcal, setLtcal] = useState("");
  const [tcal, setTcal] = useState<number>(0);
  const [sumCal, setSumCal] = useState<number>(0);

  useEffect(() => {
    const newSumCal = space.reduce((sum, item) => sum + item.cal, 0);
    setSumCal(newSumCal);
    console.log(newSumCal);
  }, [space]);

  const [, drop] = useDrop(() => ({
    accept: "food",
    drop: async (item: { id: number }) => {
      const Fooddata = await fetchFooddata(item.id);
      if (Fooddata) {
        setSpace((prevSpace) => {
          const newSpace = [...prevSpace, Fooddata];
          setHasElements(newSpace.length > 0);
          return newSpace;
        });
      }
    },
    //   drop: (item: { id: number }) => addFood(item.id),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const fetchFooddata = async (id: number) => {
    try {
      const dbRef = ref(db, `foodItems/${id}`);
      const snapshot = await get(dbRef);
      if (snapshot.exists()) {
        return snapshot.val();
        // console.log(snapshot.val());
      } else {
        console.log("No data available");
        return null;
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  };

  const deleteFood = (index: number) => {
    const updatedItems = [...space];
    updatedItems.splice(index, 1);
    setSpace(updatedItems);
    setHasElements(updatedItems.length > 0);
    // console.log(space);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log("Submitted value:", Ltcal);
    setTcal(+Ltcal);
    // console.log("Submitted value:", tcal);
    setLtcal("");
  };
  let diffCal = tcal - sumCal;
  const [foodbrowse, setFoodbrowse] = useState(false);

  return (
    <div className="relative h-full">
      <div
        id="left"
        className="rounded-[8px] md:py-4 py-1 px-2 md:px-4 border-[#464646] border-4  flex flex-col w-full h-full"
      >
        <div className="justify-center flex items-center md:text-3xl  md:mb-5 text-2xl font-bold order-1  py-1">
          Log Your Food
        </div>
        <div className="flex md:flex-row flex-col  md:py-3 md:text-md font-semibold md:order-1 order-2  ">
          <div className="flex border  justify-center items-center ">
            <span className=" md:px-4">{tcal}</span>
            <span>/</span>
            <form onSubmit={handleSubmit} className=" ">
              <input
                type="number"
                placeholder="Enter Target Calories"
                value={Ltcal}
                className="md:pl-4 w-fit outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                onChange={(event) => setLtcal(event.target.value)}
              />
            </form>
            <button className="md:ml-2 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="26px"
                viewBox="0 -960 960 960"
                width="26px"
                fill="#75FBFD"
                type="submit"
                onClick={handleSubmit}
              >
                <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
              </svg>
            </button>
          </div>
          <div className=" md:px-2 px-1 flex  w-full order-3 py-1">
            <div className="md:px-2 flex sm:mr-1 md:mr-0  ">
              Calories left -
            </div>{" "}
            <span
              className={` text-nowrap ${
                diffCal < 0 && "text-red-700 font-bold"
              } `}
            >
              {" "}
              {diffCal}
            </span>
            <div className="flex-1 "></div>
            <div className="sm:mr-1 md:mr-0 "> Total Calories -</div>
            <span className=" md:px-2 text-nowrap "> {sumCal}</span>{" "}
          </div>
        </div>
        <div className=" mt-2 md:pt-4 flex-1  relative order-4" ref={drop}>
          <div className="rounded-xl md:px-8 flex flex-col gap-4 my-2  ">
            {/* add food + here */}
            <div className="border flex px-2 border-xl md:hidden">
              <div className="font-semibold text-lg">Add Foods</div>
              <div className="grow"></div>
              <div
                onClick={() => {
                  setFoodbrowse(!foodbrowse);
                }}
                className="cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#FFFFFF"
                >
                  <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                </svg>
              </div>
            </div>
            {!hasElements && (
              <>
                <p className="md:flex absolute inset-0 hidden justify-center items-center opacity-20 bg-white text-black ">
                  Release to drop
                </p>
              </>
            )}
            {/* Render dragged food items */}
            {space.map((food, index) => (
              <Fooddata
                key={food.id}
                name={food.name}
                isx={true}
                id={food.id}
                cal={food.cal}
                handleClick={() => deleteFood(index)}
              />
            ))}
          </div>
        </div>
      </div>
      {foodbrowse && (
        <div className=" absolute inset-0  z-50 bg-[#16171b] md:hidden w-full h-full">
          <div className=""></div> <Foodbrowse />{" "}
        </div>
      )}
    </div>
  );
};
