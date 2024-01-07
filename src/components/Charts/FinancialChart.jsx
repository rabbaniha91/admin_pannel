import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  HiloSeries,
  Legend,
  Tooltip,
  DateTime,
  Zoom,
  Logarithmic,
  Crosshair,
} from "@syncfusion/ej2-react-charts";

import {
  financialChartData,
  FinancialPrimaryXAxis,
  FinancialPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const date1 = new Date("2017,1,1");
function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.height, value.low;
  }
}

const returnvalue = financialChartData.filter(filterValue);

const FinancialChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      enableRtl
      id="charts"
      primaryXAxis={{
        ...FinancialPrimaryXAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...FinancialPrimaryYAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      crosshair={{ enable: true, lineType: "Vertical", line: { width: 0 } }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true, shared: true }}
      background={currentMode === "dark" ? "#33373e" : "#fff"}
    >
      <Inject
        services={[
          Legend,
          Tooltip,
          HiloSeries,
          Tooltip,
          DateTime,
          Logarithmic,
          Crosshair,
          Zoom,
        ]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={returnvalue}
          xName="x"
          yName="low"
          low="low"
          high="high"
          name="Apple Inc"
          type="Hilo"
        />
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default FinancialChart;
