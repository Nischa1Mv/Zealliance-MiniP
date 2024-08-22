import React, { useEffect, useState } from "react";
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
  const [isPlay, setIsplay] = useState(true);
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const handlePlayClick = () => {
    setIsplay(!isPlay);
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
                src="https://www.youtube.com/embed/zkU6Ok44_CI?si=hjGpnkp3iEZp42E4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Overlay */}
              {isPlay && (
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
export default VideoOverlay;
