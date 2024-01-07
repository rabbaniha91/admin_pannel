import ColorMAppingChart from "../../components/Charts/ColorMappingChart";
import ChartHeader from "../../components/Charts/ChartHeader";

const ColorMapping = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <ChartHeader category={`میله ای - رنگی`} title={`دمای هوای تهران در سال ۱۴۰۰`} />
      <div className="w-full">
        <ColorMAppingChart />
      </div>
    </div>
  );
};

export default ColorMapping;
