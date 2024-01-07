import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ id, type, width, height, data, color, currentColor }) => {
  return (
    <SparklineComponent
      id={id}
      type={type}
      widht={width}
      height={height}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={data}
      xName="x"
      yName="yval"
      tooltipSettings={{
        visible: true,
        format: "(${x}, ${yval})",
        trackLineSettings: { visible: true },
      }}
      enableRtl={true}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
