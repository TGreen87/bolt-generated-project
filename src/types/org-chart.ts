export interface Employee {
  id: number;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  photoUrl: string;
  managerId: number | null;
}
