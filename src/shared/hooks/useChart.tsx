/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useRef, useCallback, useEffect, useState } from "react";
import { DataSetProps, Interval } from "shared/types";
import { EMPTY_DATASET } from "shared/constants";
import { ChartTypes, Axis, DataItem, d3Selection, Chart } from "billboard.js";
const CHART_FLOW_DURATION = 1000;
interface ChartProps {
  size: { width?: number; height: number };
  data: (string | number | Date)[][];
  types: { [key in string]: ChartTypes };
  format: {
    value?(value: any, ratio: number, id: string, index: number): string;
  };
  axis?: Axis;
  groups?: string[][];
  newData?: DataSetProps;
  colors?: { [key: string]: string | ((d: DataItem) => string) };
  clearNewData?: () => void;
  xAxis?: string; // object
  grid?: d3Selection;
}

function useChart({
  newData,
  clearNewData,
  size,
  data,
  colors,
  types,
  groups,
  format,
  axis,
  xAxis,
  grid
}: ChartProps) {
  const lineChart = useRef<Chart | undefined>(undefined);
  const [chartRef, setRef] = useState(undefined);
  const [legendRef, setLegend] = useState(undefined);

  const myLineChart = useCallback(async () => {
    const { bb } = await import(
      /* webpackChunkName: "billboard" */ "billboard.js"
    );
    return (
      chartRef &&
      bb.generate({
        bindto: chartRef,
        data: {
          x: xAxis,
          columns: [...data],
          colors,
          types,
          groups
        },
        grid,
        bar: {
          width: {
            ratio: 0.5
          }
        },
        axis,
        tooltip: {
          format
        },
        size,
        legend: {
          contents: {
            bindto: legendRef,
            template: `<span class='legend-box'><span class="legend-color" style='background-color:{=COLOR}'></span><span>{=TITLE}</span></span>`
          }
        }
      })
    );
  }, [chartRef, data]);

  const flowGo = useCallback(
    newData => {
      if (newData && lineChart && lineChart.current) {
        lineChart.current.flow({
          columns: newData,
          length: (newData && newData[0] && newData[0].length - 1) || 1,
          duration: CHART_FLOW_DURATION,
          done: clearNewData
        });
      }
    },
    [lineChart.current]
  );

  const RenderChart = useCallback(async () => {
    const renderedChart = await myLineChart();
    lineChart.current = renderedChart;
  }, [lineChart.current, chartRef, data]);

  if (lineChart && !lineChart.current) {
    RenderChart();
  }

  useEffect(() => {
    // isFlow인지랑 차트 타입도 확인
    if (lineChart && newData && newData.axis && newData.axis.length) {
      flowGo([newData.axis, ...newData.stacked, ...newData.line]);
    }
  }, [newData]);

  return { chartRef, setRef, RenderChart, setLegend };
}

export default useChart;

useChart.defaultProps = {
  term: Interval.day,
  stackData: [],
  newStackData: [],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearNewData: () => {},
  newAxis: [],
  groups: [],
  newData: EMPTY_DATASET,
  newLineData: [],
  size: { width: null, height: null }
};
