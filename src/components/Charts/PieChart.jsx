import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { pieChartData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const PieChart = (legendVisibility) => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      enableRtl
      id="chart-pie"
      height={`full`}
      tooltip={{ enable: true }}
      background={currentMode === "dark" ? "#33373e" : "#fff"}
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
      <Inject
        services={[
          AccumulationDataLabel,
          AccumulationLegend,
          AccumulationTooltip,
          PieSeries,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="فروش"
          dataSource={pieChartData}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          radius="70%"
          explode
          explodeOffset="14%"
          explodeIndex={2}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
            font: {
              fontWeight: "900",
              color: "#fff",
            },
          }}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PieChart;
