export default interface IDataItem {
  full_name: string;
  private: boolean;
  owner: { login: string };
  language: string;
  forks: number;
  html_url: string | undefined;
  id: number;
  avatar_url: string;
  login: string;
}
