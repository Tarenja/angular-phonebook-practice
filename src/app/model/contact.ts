export class Contact {
  id: number;
  firstname: string;
  lastname: string;
  gender: string = 'Female';
  email: string;
  phone: string;
  dob?: string;
  picture?: string;
  city?: string;
  state?: string;
  country?: string;
}
