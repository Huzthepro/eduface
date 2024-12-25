export class Job {
  id: string;
  title: string;
  company: string;
  location: string;

  constructor(id: string, title: string, company: string, location: string) {
    this.id = id;
    this.title = title;
    this.company = company;
    this.location = location;
  }
}
