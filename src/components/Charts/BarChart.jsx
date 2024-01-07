import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Legend,
  Tooltip,
  Category,
  DataLabel,
} from "@syncfusion/ej2-react-charts";

import {
  barCustomSeries,
  barPrimaryXAxis,
  barPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const BarChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      enableRtl
      id="charts"
      primaryXAxis={{
        ...barPrimaryXAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...barPrimaryYAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "dark" ? "#33373e" : "#fff"}
      style={{ color: "#FFF" }}
      palettes={[
        "#00bdae",
        currentMode === "dark" ? "#ffa801" : "#4b4b4b",
        "#ff5e57",
      ]}
      legendSettings={{
        background: currentMode === "dark" ? "#33373e" : "#fff",
        textStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
    >
      <Inject services={[Legend, Tooltip, ColumnSeries, Category, DataLabel]} />
      <SeriesCollectionDirective>
        {barCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default BarChart;
