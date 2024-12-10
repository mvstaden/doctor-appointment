import { useState } from "react";
import { fr_assets } from "../assets/assets_frontend/assets";
const initalDetails = {
  name: "Edward Vincent",
  image: fr_assets.profile_pic,
  email: "richardjameswap@gmail.com",
  phone: "+1  123 456 7890",
  address: {
    line1: "57th Cross, Richmond ",
    line2: "Circle, Church Road, London",
  },
  gender: "Male",
  dob: "2000-01-20",
};
const MyProfile = () => {
  const [userData, setUserData] = useState(initalDetails);
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img src={userData.image} alt="" className="w-36 rounded" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="bg-gray-200 text-3xl font-medium max-w-60 mt-4 "
        />
      ) : (
        <h3 className="font-medium text-3xl text-neutral-800 mt-4 ">
          {userData.name}
        </h3>
      )}
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <h4 className="text-neutral-500 underline mt-3 ">
          Contact Information
        </h4>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email Id:</p>
          <p className="text-blue-500">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="bg-gray-200 max-w-52"
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
                className="bg-gray-200"
              />
              <br />
              <input
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
                className="bg-gray-200"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <h4 className="text-neutral-500 underline mt-3 ">Basic Information</h4>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
              className="max-w-20 bg-gray-100">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthdate:</p>
          {isEdit ? (
            <input
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
              className="max-w-28 bg-gray-100"
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <div>
            <button
              onClick={() => setIsEdit(false)}
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all">
              Save
            </button>
            <button
              onClick={() => {
                setUserData(initalDetails), setIsEdit(false);
              }}
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all">
              Cancel
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setIsEdit(true)}
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all">
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default MyProfile;
