import RepositoryItemInterface from "./RepositoryItemInterface.interface";
import UserDataItemInterface from "./UserDataItemInterface.interface";

export default interface DataInterface {
  incomplete_results: boolean;
  items: Array<RepositoryItemInterface | UserDataItemInterface>;
  total_count: number;
}
