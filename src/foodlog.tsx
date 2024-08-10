import { useState, useEffect } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { ref, get } from "firebase/database";
import { db } from "./firebase";

const Foodlog = () => {
  return (
    //this is the main page
    <div className="flex gap-4 px-2 py-6 justify-center">
      <Caloriesfood />
      <Foodbrowse />
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

    <div
      id="right"
      className="border-[#464646] border-4 px-10 py-6 flex flex-col gap-6 rounded-[8px] w-[48%] h-full min-h-[82vh]"
    >
      <div className="flex rounded-[8px]  px-2 py-1 border-[#464646] border-2 ">
        <input
          className=" text-white bg-transparent focus:outline-none px-2 w-full py-2 "
          type="text"
          placeholder="food..."
        />
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
        className=" h-full flex flex-col gap-6 rounded-xl "
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
            <Fooddata
              key={food.id}
              cal={food.cal}
              name={food.name}
              isx={false}
              id={food.id}
              handleClick={() => {}}
            />
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
      className="px-4  rounded-[6px] font-bold text-lg py-2 flex relative border-2  "
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

  return (
    <div
      id="left"
      className="rounded-[8px] py-4 px-4 border-[#464646] border-4 w-[48%] flex flex-col"
    >
      <div className="justify-center items-center text-3xl  mb-5   font-bold">
        Log Your Food
      </div>
      <div className="flex  py-3 text-lg font-semibold  ">
        <div className=" px-2 ">
          Total Calories - <span className="border px-2 "> {sumCal}</span>
        </div>
        <div className="grow"></div>
        <div className="flex border  justify-center items-center ">
          <span className=" px-4">{tcal}</span>
          <span>/</span>
          <form onSubmit={handleSubmit} className=" ">
            <input
              type="number"
              placeholder="Enter Target Calories"
              value={Ltcal}
              className="pl-4 grow w-fit outline-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onChange={(event) => setLtcal(event.target.value)}
            />
          </form>
        </div>
        <button className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#75FBFD"
            type="submit"
            onClick={handleSubmit}
          >
            <path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z" />
          </svg>
        </button>
      </div>

      <div className=" pt-4 flex-1  relative" ref={drop}>
        <div className="rounded-xl px-8 flex flex-col gap-4 my-2  ">
          {!hasElements && (
            <p className="absolute inset-0 flex justify-center items-center opacity-20 bg-white text-black">
              Release to drop
            </p>
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
  );
};
