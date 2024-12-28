export default interface CertificateModel {
  name: string;
  issuer: string;
  issue_date: Date;
  credential_id: string;
  credential_url: string;
  skills: string[];
}
