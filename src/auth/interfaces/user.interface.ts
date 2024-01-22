import { UserRole } from "@prisma/client";

export interface UserInterface {
  id: number;
  name: string;
  role: UserRole;
}
