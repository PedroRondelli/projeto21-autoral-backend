export type loginCredentials = Omit<userType, "id">;

export type ApplicationError = {
  name: string;
  message: string;
};

export type userType = {
  id: number;
  email: string;
  password: string;
};
export type Registration = {
  email: string;
  password: string;
  confirmation: string;
};
