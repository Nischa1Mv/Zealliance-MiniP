import React from "react";

interface Props {
  name: string;
  link: string;
}

const Navbox: React.FC<Props> = ({ name, link }) => {
  return (
    <div className="my-6 hover:border-white rounded font-semibold">
      <a className="p-4" href={link}>
        {" "}
        {name}{" "}
      </a>{" "}
    </div>
  );
};

export default Navbox;
