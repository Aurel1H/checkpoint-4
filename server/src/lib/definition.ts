type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  hash_password: string;
  avatar: string;
  created_at: number;
  updated_at: number;
};

type NewUserType = {
  firstname: string;
  lastname: string;
  email: string;
  hash_password: string;
};
