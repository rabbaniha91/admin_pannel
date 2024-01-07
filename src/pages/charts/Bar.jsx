import BarChart from "../../components/Charts/BarChart";

import ChartHeader from "../../components/Charts/ChartHeader";

const Bar = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <ChartHeader category={`میله ای`} title={`تعدا مدال های المپیک`} />
      <div className="w-full">
        <BarChart />
      </div>
    </div>
  );
};

export default Bar;
