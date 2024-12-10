import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets_frontend/assets";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h2 className="text-3xl font-medium ">Find by Speciality</h2>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex flex-wrap justify-center sm:justify-center gap-4 pt-5 w-full ">
        {specialityData.map((item, index) => (
          <Link
            className="flex flex-col items-center text-xs cursor-pointer  hover:translate-y-[-10px] transition-all duration-500"
            key={index}
            to={`/doctors/${item.speciality}`}>
            <img className="w-20 sm:w-24 mb-2" src={item.image} alt="" />
            <p>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SpecialityMenu;
