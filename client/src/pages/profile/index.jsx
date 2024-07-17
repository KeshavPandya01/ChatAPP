import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { colors, getColor } from "@/lib/utils";
import { useAppStore } from "@/store";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { FaTrash, FaPlus } from "react-icons/fa";
import { Input } from "@/components/ui/input";



const Profile = () => {
  const { userInfo } = useAppStore();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [hovered, setHovered] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const saveChanges = () => {};
  return (
    <div className="bg-[#1b1c24] h-[100vh] flex items-center justify-center gap-10">
      <div className="flex flex-col gap-10 w-[80vw] md:w-max">
        <div className="">
          <IoArrowBack className="text-4xl lg:text-6xl text-white/90 cursor-pointer" />
          <div className="grid-cols-2">
            <div
              className="h-full w-32 md:w-48 md:h-48 relative items-center justify-center"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Avatar className="h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden">
                {image ? (
                  <AvatarImage
                    src={image}
                    alt="profile"
                    className="object-cover w-full h-full bg-black"
                  />
                ) : (
                  <div
                    className={`uppercase h-32 w-32 md:w-48 md:h-48 text-5xl border-[1px] flex items-center justify-center rounded-full ${getColor(
                      selectedColor
                    )}`}
                  >
                    {firstName
                      ? firstName.split("").shift()
                      : userInfo.email.split("").shift()}
                  </div>
                )}
              </Avatar>
              {hovered && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer ring-fuchsia-50">
                  {image ? (
                    <FaTrash className="text-white text-3xl cursor-pointer" />
                  ) : (
                    <FaPlus className="text-white text-3xl cursor-pointer" />
                  )}
                </div>
              )}
              {/* <input type='text'/> */}
            </div>
            <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">
              <div className="w-full">
                <Input
                  placeholder="email"
                  type="email"
                  disabled
                  value={userInfo.email}
                  className="rounded-lg p-6 bg-[#2c2e3b] border-none"
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder="First Name"
                  type="email"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="rounded-lg p-6 bg-[#2c2e3b] border-none"
                />
              </div>
              <div className="w-full">
                <Input
                  placeholder="Last Name"
                  type="email"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="rounded-lg p-6 bg-[#2c2e3b] border-none"
                />
              </div>
              <div className="w-full flex gap-5">
                {
                  colors.map((color, index)=> <div className={`${color} h-8 w-8 rounded-full cursor-pointer transition-all duration-300`} key={index}></div>)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
