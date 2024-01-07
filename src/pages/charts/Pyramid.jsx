import PyramidChart from "../../components/Charts/PyramidChart";

import ChartHeader from "../../components/Charts/ChartHeader";

const Pyramid = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <ChartHeader
        category={`هرمی`}
        title={`مقایسه کالری غذاها`}
      />
      <div className="w-full">
        <PyramidChart />
      </div>
    </div>
  );
};

export default Pyramid;
