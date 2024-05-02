import { Avatar, AvatarImage } from "../@/components/ui/avatar";
import Bmi from "./bmi";

function Home() {
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const longDate = currentDate.toLocaleDateString(undefined, options);
  return (
    <>
      <div id="body" className=" h-screen flex flex-col gap-5 mx-12 my-5 ">
        <div
          id="nav"
          className="flex gap-6 bg-[#f4a261]  h-[80px] border border-b-4 px-10 border-[#0E131F] relative rounded-xl"
        >
          <div className="text-xl font-semibold  order-1 my-6 ">
            {longDate}{" "}
          </div>
          <div className="grow order-1"></div>
          <div className="text-5xl font-bold order-2  my-3">Zeallience</div>
          <div className="grow order-3"></div>
          <div className="text-xl font-semibold order-3 my-6 px-4">
            Workout Plans
          </div>
          <div className="text-xl font-semibold order-4 my-6 px-4  ">
            {" "}
            Workoutlog{" "}
          </div>
          <div className="text-xl font-semibold order-5 my-6 px-4">
            FoodLog{" "}
          </div>

          <div className="order-6 absolutue right-0">
            <Avatar>
              <AvatarImage
                className="h-[60px] mt-2 outline-white outline rounded-[50%]"
                src="https://www.github.com/Nischa1Mv.png"
              ></AvatarImage>
              {/* <AvatarFallback>Profile</AvatarFallback> */}
            </Avatar>
          </div>
        </div>

        <Bmi />
      </div>
    </>
  );
}

export default Home;
