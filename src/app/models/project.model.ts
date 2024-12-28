export default interface ProjectModel {
  name: string;
  description: string;
  start_date: Date;
  end_date: Date;
  github_link: string;
  hosted_link?: string;
  media?: string[];
  skills?: string[];
  motivation?: string;
  solves?: string;
}
