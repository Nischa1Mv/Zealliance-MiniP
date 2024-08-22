import React, { useEffect, useState } from "react";
import { ref, get } from "firebase/database";
import { db } from "../DB/firebase";
import Fooddata from "./FoodData";

interface FoodbrowseProps {
  addfood: (id: number) => void;
  foodbrowse: boolean;
  setFoodbrowse: React.Dispatch<React.SetStateAction<boolean>>;
}

const Foodbrowse: React.FC<FoodbrowseProps> = ({
  addfood,
  foodbrowse,
  setFoodbrowse,
}) => {
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
      <div
        onClick={() => {
          setFoodbrowse(!foodbrowse);
        }}
        className="md:hidden flex "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFFFFF"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
      </div>
      <div className="flex rounded-[8px]  px-2 py-1 border-[#464646] border-2 ">
        <input
          className=" text-white bg-transparent focus:outline-none px-2 w-full py-2 "
          type="text"
          placeholder="food..."
        />

        <div className=" flex justify-center items-center">
          {/* searchbar */}
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
        {food.map((food, index) => {
          return (
            <div className="relative " key={`${food.id}-${index}`}>
              <Fooddata
                key={food.id}
                cal={food.cal}
                name={food.name}
                isx={false}
                id={food.id}
                handleClick={() => {}}
              />
              <div
                onClick={() => {
                  addfood(food.id);
                }}
                className="absolute md:top-3 top-2 right-2 cursor-pointer"
              >
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

export default Foodbrowse;
