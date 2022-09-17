import IDataItem from "./IDataItem.interface";

export default interface DataInterface {
  incomplete_results: boolean;
  items: Array<IDataItem>;
  total_count: number;
}
