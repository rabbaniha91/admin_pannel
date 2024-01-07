import React from "react";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";
import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const StackedChart = ({ width, height }) => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={{
        ...stackedPrimaryXAxis,
        labelStyle: { color: currentMode === "dark" ? "#fff" : "" },
      }}
      primaryYAxis={{
        ...stackedPrimaryYAxis,
        labelStyle: { color: currentMode === "dark" ? "#fff" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{
        background: currentMode === "dark" ? "#33373e" : "#fff",
        textStyle: { color: currentMode === "dark" ? "#fff" : "" },
      }}
      enableRtl
      palettes={["#00bdae", currentMode === "dark" ? "#f6d58e" : "4b4b4b"]}
    >
        <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
        <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, index) => (
                <SeriesDirective key={index} {...item}/>
            ))}
        </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default StackedChart;
