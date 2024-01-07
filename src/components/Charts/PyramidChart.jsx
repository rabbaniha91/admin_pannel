import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PyramidSeries,
  AccumulationSelection,
  AccumulationDataLabel,
  Inject,
  AccumulationTooltip,
} from "@syncfusion/ej2-react-charts";

import { PyramidData } from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";
const PyramidChart = () => {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id="pyramid-Chart"
      tooltip={{ enable: true }}
      background={currentMode === "dark" ? "#33373e" : "#fff"}
      enableRtl={true}
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
          PyramidSeries,
          AccumulationSelection,
        ]}
      />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="غذا"
          dataSource={PyramidData}
          xName="x"
          yName="y"
          type="Pyramid"
          width="40%"
          height="80%"
          neckWidth="15%"
          gapRatio={0.05}
          explode
          emptyPointSettings={{ mode: "Drop", fill: "red" }}
          dataLabel={{
            visible: true,
            name: "text",
            position: "Inside",
          }}
          palettes={[
            "#FFA000",
            "#00796B",
            "#0288D1",
            "#303F9F",
            "#7B1FA2",
            "#D32F2F",
          ]}
        />
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  );
};

export default PyramidChart;
