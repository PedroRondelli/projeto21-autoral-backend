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

export type Profile = {
  name: string;
  nickname: string;
  about: string;
  specialties: string;
  thank: string;
};
