import Datacount from "./datacount";

const search =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAd5JREFUSEu11cvLTWEUx/HPGxnIpSiXiZAwcIuSAQpFL2XqUgxIURhQBv4AMiEhDCgk5Q+Q0VsImSAlopTIgFwi9+uz6nl1HO/e5xnssya7zn7O+j5rrd9v7R5djp4u51cHmIB1WInZ+SJ3cAkX8LzkcgMBRuAcVtck+I2L2IRPdaB2wFDcwgx8xUkcxpOcZDJ2YQuG5LOL8L0K0g44iw14hhV4UPHHWbicLjAeB7G7BDAT9/Aj9Xk+ot91sRhX8A2T8GKgw60VHMF2HMWOkgHiPNYnyF7s7wR4jCm5//cLAUvQh2vpGRX9F60VfEQMeRB+FQJGpWpf4w1GdwK8x3AMQ8BKIs5+wCuM6QS4mw01L3ngdkn2pKQFSW03c5uWdQIcSKbZgxPYVgg4kzyyMbUnBLKzE2AqHuJnoUzDYFdz0sqq2412Ktv/KZYnCT6qqGRONtrY7PatJUaLM62r4guO41B2dryPKmNVbMbgnDRmEK6PYdfKtP/lyGygVTVzeJd20b7U0rWYm12/FPH7P1G3ridml/Yids/nrK4bOIa3CB+E0WKdhwpDSeGJv9HEBycg1zEdsQ0W4mU/oQlA5AqThaKm5fmcbhoQ+cal9b4mfz8abVGtJ5tqUSWk64A/OxFWGSrrSC8AAAAASUVORK5CYII=";

const Workoutlog = () => {
  return (
    <div className="w-full h-full  py-4 pt-5 px-5 ">
      <div className="flex gap-4">
        <div className=" flex rounded-xl  grow">
          <input
            type="text"
            className=" py-4 px-4 w-full  rounded-xl h-full "
          />
          <div className="flex justify-center items-center mr-4">
            <img src={search} alt="search icon" />
          </div>
        </div>
        <div className="w-fit h-fit p-4 rounded-xl flex">
          <img
            width="25"
            height="25"
            src="https://img.icons8.com/tiny-glyph/16/add-folder.png"
            alt="add-folder"
          />
        </div>
      </div>
      <Datacount />
    </div>
  );
};

export default Workoutlog;
