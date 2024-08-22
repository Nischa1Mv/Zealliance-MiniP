const Paragraphguy = () => {
  return (
    <div
      id="paragraph"
      className="flex flex-col md:py-2 md:px-4 text-pretty    "
    >
      <div className="font-bold md:text-4xl md:pb-2 text-2xl">Calisthenics</div>
      <div className="md:text-xl font-medium md:py-2 text-medium ">
        <div>
          The term calisthenics comes from the Greek words ‘Kalos’ meaning
          beauty and ‘Stenos’ which translates as strength.{" "}
        </div>
        <div className="md:block hidden">
          {" "}
          Calisthenics is a form of strength training that utilizes an
          individual's body weight as resistance to perform multi-joint,
          compound movements with little or no equipment
        </div>
      </div>
    </div>
  );
};
export default Paragraphguy;
