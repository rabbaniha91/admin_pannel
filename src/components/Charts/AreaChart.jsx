import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  SplineAreaSeries
} from "@syncfusion/ej2-react-charts";

import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const AreaChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      enableRtl
      id="area-chart"
      height="420px"
      primaryXAxis={{
        ...areaPrimaryXAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...areaPrimaryYAxis,
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
      <Inject services={[DateTime, Legend, Tooltip, SplineAreaSeries]} />
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default AreaChart;
