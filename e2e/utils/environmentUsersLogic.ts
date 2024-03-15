import { users as devUsers } from "./users.dev";
import { users as localUsers } from "./users.local";

// Define the type for the users object
export type Users = typeof devUsers;

// Determine the users based on the environment
export const users: Users =
  process.env.NODE_ENV === "development" ? devUsers : localUsers;
