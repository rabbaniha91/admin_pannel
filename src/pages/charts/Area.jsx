import AreaChart from '../../components/Charts/AreaChart';

import Header from "../../components/Header";

const Area = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Header category={`نمودار مساحتی`} title={`نرخ تورم`} />
      <div className="w-full">
        <AreaChart />
      </div>
    </div>
  );
};

export default Area;