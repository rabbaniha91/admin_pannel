import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  ColumnSeries,
  Legend,
  Tooltip,
  Category,
  RangeColorSettingsDirective,
  RangeColorSettingDirective,
} from "@syncfusion/ej2-react-charts";

import {
  colorMappingData,
  ColorMappingPrimaryXAxis,
  ColorMappingPrimaryYAxis,
  rangeColorMapping,
} from "../../data/dummy";
import { useStateContext } from "../../contexts/ContextProvider";

const ColorMAppingChart = () => {
  const { currentMode } = useStateContext();
  return (
    <ChartComponent
      enableRtl
      id="charts"
      primaryXAxis={{
        ...ColorMappingPrimaryXAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
        titleStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      primaryYAxis={{
        ...ColorMappingPrimaryYAxis,
        labelStyle: { color: currentMode === "dark" ? "white" : "" },
        titleStyle: { color: currentMode === "dark" ? "white" : "" },
      }}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === "dark" ? "#33373e" : "#fff"}
      legendSettings={{
        background: currentMode === "dark" ? "#33373e" : "#fff",
        textStyle: { color: currentMode === "dark" ? "white" : "" },
        mode: "Range",
      }}
    >
      <Inject services={[Legend, Tooltip, ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={colorMappingData[0]}
          xName="x"
          yName="y"
          name="تهران"
          type="Column"
          cornerRadius={{ topLeft: 14, topRight: 14 }}
        />
      </SeriesCollectionDirective>
      <RangeColorSettingsDirective>
        {rangeColorMapping.map((item, index) => (
          <RangeColorSettingDirective key={index} {...item} />
        ))}
      </RangeColorSettingsDirective>
    </ChartComponent>
  );
};

export default ColorMAppingChart;
