import StackedChart from '../../components/Charts/StackedChart';
import ChartHeader from "../../components/Charts/ChartHeader";

const Stacked = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <ChartHeader category={`انباشته`} title={`درآمد و هزینه`} />
      <div className="w-full">
        <StackedChart />
      </div>
    </div>
  );
};

export default Stacked;
