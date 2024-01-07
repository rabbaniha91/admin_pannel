import React, { useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { TiThMenuOutline } from "react-icons/ti";
import { BsCart3, BsChatDots } from "react-icons/bs";
import { MdOutlineNotificationsNone } from "react-icons/md";
import avatar from '../data/avatar.jpg';
import { RiArrowDropDownLine } from "react-icons/ri";
import Cart from "./Cart";
import Chat from "./Chat";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

const NavBtn = ({ title, customFunc, color, dotColor, icon }) => (
  <TooltipComponent content={title} position="BottomLeft">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className=" relative rounded-full text-xl p-3 hover:bg-gray-100"
    >
      <span
        style={{ background: dotColor }}
        className=" rounded-full absolute top-2 right-2 inline-flex
             h-2 w-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    setActiveMenu,
    isClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenSize < 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, []);
  return (
    <div
      className=" flex dark:shadow-gray-800 shadow-sm justify-between p-2 shadow-gray-200
  relative"
    >
      <NavBtn
        title="منو"
        color={currentColor}
        customFunc={() => setActiveMenu((prev) => !prev)}
        icon={<TiThMenuOutline />}
      />
      <div className="flex flex-row-reverse">
        <NavBtn
          title={`سبد خرید`}
          color={currentColor}
          customFunc={() => handleClick("cart")}
          icon={<BsCart3 />}
        />
        <NavBtn
          title={`چت`}
          color={currentColor}
          customFunc={() => handleClick("chat")}
          icon={<BsChatDots />}
          dotColor="#03c9d7"
        />
        <NavBtn
          title={`اطلاع رسانی`}
          color={currentColor}
          customFunc={() => handleClick("notification")}
          icon={<MdOutlineNotificationsNone />}
          dotColor={currentColor}
        />
        <TooltipComponent content={`پروفایل`} position="BottomCenter">
          <div
            className=" flex items-center gap-2 cursor-pointer p-1 hover:bg-gray-100
             rounded-lg "
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="" className=" rounded-full w-8 h-8"/>
            <p>
                <span className=" text-gray-400 text-14">سلام</span>
                <span className=" text-gray-400 font-bold ml-1 text-14"> پازل</span>
            </p>
            <RiArrowDropDownLine className=" text-gray-400 text-2xl"/>
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
