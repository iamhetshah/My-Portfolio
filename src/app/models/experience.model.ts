export default interface ExperienceModel {
  designation: string;
  type: string;
  company: string;
  company_logo: string;
  company_website: string;
  start_date: Date;
  end_date?: Date;
  location_type: 'remote' | 'on-site' | 'hybrid';
  description: string;
  skills: string[];
  location: string;
}
