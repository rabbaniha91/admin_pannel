import PieChart from "../../components/Charts/PieChart";

import ChartHeader from "../../components/Charts/ChartHeader";

const Pie = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <ChartHeader
        category={`دایره ای`}
        title={`درصد افزایش هزینه های انجام پروژه`}
      />
      <div className="w-full">
        <PieChart legendVisibility />
      </div>
    </div>
  );
};

export default Pie;
