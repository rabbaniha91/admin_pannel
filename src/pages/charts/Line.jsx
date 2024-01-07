import LineChart from '../../components/Charts/LineChart';
import Header from '../../components/Header';

const Line = () => {
  return (
    <div className=" m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373e] rounded-3xl">
      <Header category={`نمودار`} title={`نرخ تورم`} />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
}

export default Line