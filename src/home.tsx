import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

import Navbox from "../custom-componets/nav_div";

function Home() {
  return (
    <>
      <div id="body" className="bg-[#0E131F] h-screen w-screen">
        <div id="nav" className="flex gap-6 bg-[#f4a261] w-screen h-[80px] ">
          <div className=" p-4  ml-4 my-2  text-4xl font-bold">AppName</div>
          <div className="grow"></div>
          <Navbox name="Workout Plans" link="#"></Navbox>
          <Navbox name="Workoutlog" link="#"></Navbox>
          <Navbox name="FoodLog" link="#"></Navbox>
          <div className="h-[50px] w-[50px] my-4 mr-4 border border-White rounded-[50%] ">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/118107697?v=4"></AvatarImage>
              <AvatarFallback>CN</AvatarFallback>{" "}
            </Avatar>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
