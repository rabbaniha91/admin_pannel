import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import { AiFillSetting } from "react-icons/ai";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Emploees from "./pages/Emploees";
import Customers from "./pages/Customers";
import Calender from "./pages/Calender";

import { loadCldr } from "@syncfusion/ej2-base";
import * as gregorian from "cldr-data/main/fa/ca-gregorian.json";
import * as numbers from "cldr-data/main/fa/numbers.json";
import * as timeZoneNames from "cldr-data/main/fa/timeZoneNames.json";
import * as numberingSystems from "cldr-data/supplemental/numberingSystems.json";
import * as weekData from "cldr-data/supplemental/weekData.json";
import Kanban from "./pages/Kanban";
import Editor from "./pages/Editor";
import ColorPicker from "./pages/ColorPicker";
import Line from "./pages/charts/Line";
import Area from "./pages/charts/Area";
import Bar from "./pages/charts/Bar";
import Pie from "./pages/charts/Pie";
import Financial from "./pages/charts/Financial";
import ColorMapping from "./pages/charts/ColorMapping";
import Pyramid from "./pages/charts/Pyramid";
import Stacked from "./pages/charts/Stacked";
import ThemeSettings from "./components/ThemeSettings";
function App() {
  loadCldr(gregorian, numbers, timeZoneNames, numberingSystems, weekData);
  const {
    activeMenu,
    currentColor,
    currentMode,
    themeSettings,
    setThemeSettings,
    isClicked,
  } = useStateContext();
  return (
    <>
      <div className={currentMode === "dark" ? "dark" : ""}>
        <BrowserRouter>
        {themeSettings && <ThemeSettings />}
          <div className="dark:bg-main-dark-bg flex relative">
            <div className=" fixed left-4 bottom-4 z-[10000]">
              <TooltipComponent content="تنظیمات" position="TopRight">
                <button
                  type="button"
                  className="text-3xl p-2 hover:drop-shadow-xl hover:bg-light-gray text-white"
                  style={{ background: currentColor, borderRadius: "50%" }}
                  onClick={() => setThemeSettings(true)}
                >
                  <AiFillSetting />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div
                className={`top-16 lg:top-0 w-72 fixed shrink-0 mr-1 rounded-tl-lg rounded-bl-lg z-[${
                  isClicked.cart ? "10" : "10000"
                }] dark:bg-secondary-dark-bg
               bg-white`}
              >
                <SideBar />
              </div>
            ) : (
              <div className="w-0">
                <SideBar />
              </div>
            )}
            <div
              className={` dark:bg-main-dark-bg bg-gray-100 min-h-screen max-w-full grow ${
                activeMenu && "lg:pr-72 mr-1.5"
              }`}
            >
              <div
                className=" sticky top-0 left-0 bg-main-bg dark:bg-main-dark-bg navbar"
                style={{ zIndex: 9000 }}
              >
                <Navbar />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Ecommerce />} />
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Emploees />} />
                  <Route path="/customers" element={<Customers />} />
                  <Route path="/calendar" element={<Calender />} />
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/color-picker" element={<ColorPicker />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                  <Route path="/stacked" element={<Stacked />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
