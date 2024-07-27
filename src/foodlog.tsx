import { useState } from "react";
import Food from "./food.ts";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";

const Foodlog = () => {
  return (
    //this is the main page
    <div className="flex gap-14 my-10 min-h-[82vh]">
      <Caloriesfood />
      <Foodbrowse />
    </div>
  );
};
export default Foodlog;

const Foodbrowse = () => {
  return (
    //this will contain the draggable ellements

    <div
      id="right"
      className="border-[#464646] border-4 px-10 py-6 flex flex-col gap-6 rounded-[8px] w-[48%] h-full"
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
        {" "}
        {Food.map((props) => {
          return (
            <Fooddata
              cal={props.cal}
              name={props.name}
              isx={false}
              id={props.id}
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
  const [space, setSpace] = useState<Food[]>([]);

  const [, drop] = useDrop(() => ({
    accept: "food",
    drop: (item: { id: number }) => addFood(item.id),
    collect: (monitor: DropTargetMonitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const addFood = (id: number) => {
    const draggedFood: Food[] = Food.filter((food) => id === food.id);
    setSpace((space) => [...space, draggedFood[0]]);

    console.log(space);
  };

  const deleteFood = (index: number) => {
    // const updatedSpace = space.filter((food) => index !== id);
    // setSpace(updatedSpace);
    const updatedItems = [...space];
    updatedItems.splice(index, 1);
    setSpace(updatedItems);
    console.log(space);
  };

  const [Ltcal, setLtcal] = useState("");
  const [tcal, setTcal] = useState<number>(0);
  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitted value:", Ltcal);
    setTcal(+Ltcal);
    console.log("Submitted value:", tcal);
    setLtcal("");

    // Handle form submission logic here
  };

  return (
    <div
      id="left"
      className="rounded-[8px] py-2 px-4 border-[#464646] border-4 w-[48%] "
    >
      <div className="flex relative py-3 text-lg font-semibold ">
        <div>Food</div>
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
        <button>
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

      <div className=" pt-4 min-h-full " ref={drop}>
        <div className="rounded-xl px-8 flex flex-col gap-4 my-2">
          {/* Render dragged food items */}
          {space.map((food, index) => (
            <Fooddata
              key={index}
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

// interface Props {
//   type: string;
//   placeholder: string;
// }
// const Justinput = ({ type, placeholder }: Props) => {
//   return (
//     <>
//       <input
//         className=" py-1 w-[50%] text-lg font-medium px-2 bg-transparent border border-amber-100 text-white placeholder:font-medium placeholder:text-lg focus:outline-none  [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//         type={type}
//         placeholder={placeholder}
//       />
//     </>
//   );
// };
