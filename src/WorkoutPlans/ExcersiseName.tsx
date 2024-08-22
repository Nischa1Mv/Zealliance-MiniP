import React, { useState } from "react";
import VideoOverlay from "./VideoOverlay";
interface ExcersicenameProps {
  Name: string;
  Steps: string[];
}

const Excersicename: React.FC<ExcersicenameProps> = ({ Name, Steps }) => {
  const [Info, setInfo] = useState(false);

  return (
    <div className="">
      <div className="border border-[#464646]  " onClick={() => setInfo(!Info)}>
        <div className="px-4 py-1 flex font-semibold text-medium">
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
export default Excersicename;
