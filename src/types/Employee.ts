/**
 * Represents an employee record in the organizational hierarchy.
 */
interface Employee {
  /** Unique identifier for the employee */
  id: number;

  /** Employee's full name */
  name: string;

  /** Employee's job title or role */
  position: string;

  /** Business email address */
  email: string;

  /** Contact phone number */
  phone: string;

  /** URL to employee's profile photo */
  photoUrl: string;

  /** ID reference to direct manager (null for top-level) */
  managerId: number | null;
}

export type { Employee };
