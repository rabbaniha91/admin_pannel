import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, NavLink } from "react-router-dom";
import { RiAdminFill } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";

const SideBar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const [isHover, setIsHover] = useState(false);
  const activeLink =
    "flex items-center gap-5 pr-4 pb-2.5 pt-3 rounded-lg text-white text-md m-2";
  const normalLink = `flex items-center gap-5 pr-4 pb-2.5 pt-3 rounded-lg text-gray-700 dark:text-gray-200 
    dark:hover:text-black hover:bg-light-gray text-md m-2`;

  const handleClickSideBar = () => {
    if (activeMenu && screenSize >= 1024) {
      setActiveMenu(false);
    }
  };
  return (
    <div
      className=" mr-3 h-screen  overflow-y-scroll pb-10"
    >
      {activeMenu && (
        <>
          <div className=" flex justify-between items-center">
            <Link
              to="/"
              onClick={handleClickSideBar}
              className=" flex items-center gap-3
             mr-3 text-xl font-bold tracking-tight dark:text-white text-slate-900 mt-3"
            >
              <span
                className=" border-2 border-gray-500 rounded-full p-[5px]
                 flex items-center justify-center"
              >
                <RiAdminFill className="text-xl" />
              </span>
              <span className=" ">ادمین</span>
            </Link>
            <TooltipComponent
              enableRtl={true}
              content={`بستن منو`}
              position="BottomCenter"
            >
              <button
                type="button"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                onClick={() => setActiveMenu((prev) => !prev)}
                className=" text-xl rounded-full
                 p-[1px] hover:bg-light-gray dark:hover:bg-red-700 mt-4 ml-4 block dark:text-gray-50"
              >
                <AiFillCloseCircle
                  size={24}
                  color={`${isHover ? "#f22" : "#eee"}`}
                  className={`hover:text-red-500`}
                />
              </button>
            </TooltipComponent>
          </div>
          <div className=" mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className=" text-gray-400 m-3 mt-4">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.to}`}
                    key={link.name}
                    onClick={handleClickSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="text-md">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SideBar;
