import React, { useEffect, useState } from "react";
import { useDrop, DropTargetMonitor } from "react-dnd";
import { ref, get } from "firebase/database";
import { db } from "../DB/firebase";
import Fooddata from "./FoodData";

interface Food {
  id: number;
  name: string;
  cal: number;
}
interface CaloriesfoodProps {
  space: Food[];
  setSpace: React.Dispatch<React.SetStateAction<Food[]>>;
  foodbrowse: boolean;
  setFoodbrowse: React.Dispatch<React.SetStateAction<boolean>>;
}

const Caloriesfood: React.FC<CaloriesfoodProps> = ({
  space,
  setSpace,
  foodbrowse,
  setFoodbrowse,
}) => {
  const [hasElements, setHasElements] = useState<boolean>(false);
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
    </div>
  );
};

export default Caloriesfood;
