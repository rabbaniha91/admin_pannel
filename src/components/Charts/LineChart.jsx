import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from "@syncfusion/ej2-react-charts";

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const LineChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      enableRtl
      id="line-chart"
      height="420px"
      primaryXAxis={{
        ...LinePrimaryXAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...LinePrimaryYAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "dark" ? "#33373e" : "#fff"}
      style={{ color: "#FFF" }}
      palettes={[
        "#00bdae",
        currentMode === "dark" ? "#f6e58d" : "#4b4b4b",
        "#ee5a24",
      ]}
      legendSettings={{
        background: currentMode === "dark" ? "#33373e" : "#fff",
        textStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
    >
      <Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default LineChart;
