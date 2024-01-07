import FinancialChart from "../../components/Charts/FinancialChart";
import ChartHeader from "../../components/Charts/ChartHeader";

const Financial = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <ChartHeader category={`مالی`} title={`شرکت اپل`} />
      <div className="w-full">
        <FinancialChart />
      </div>
    </div>
  );
};

export default Financial;
