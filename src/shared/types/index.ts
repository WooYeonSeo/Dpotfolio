export enum Interval {
  year = "year",
  month = "month",
  day = "day",
  hour = "hour",
  minute = "minute",
  second = "second"
}
export interface DataSetProps {
  axis: (string | Date)[];
  stacked: string[][];
  line: string[][];
}

export enum SideMenuState {
  OPEN = "open",
  CLOSE = "close"
}
