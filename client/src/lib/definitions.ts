// user
type UserType = {
  id: number;
  content: string;
  firstname: string;
  lastname: string;
};

type FormValues = {
  firstname: string;
  lastname: string;
  email: string;
  hash_password: string;
  confirmed_password: string;
  avatar: string;
  country_id: number;
};

// book

type BookDetailType = {
  id: number;
  title: string;
  summary: string;
  genre: string;
  language: string;
  author: string;
  publisher: string;
  illustrator: string;
  owner: string;
  isbn: number;
  page_count: number;
  cover_image: string;
  pickup_address: string;
  statut: string;
};

// profil

type ProfileFormValues = {
  firstname: string;
  lastname: string;
  email: string;
  avatar?: string;
  hash_password: string;
  confirmed_password: string;
};

type UpdateFormValues = {
  firstname?: string;
  lastname?: string;
  email?: string;
  avatar?: string;
  new_password?: string;
  confirmed_password?: string;
  country_id: number;
  role_id: number;
};

type DataUserType = {
  avatar: string;
  country_id: number;
  decision_id: number;
  email: string;
  firstname: string;
  hash_password: string;
  id: number;
  lastname: string;
  role: string;
  role_id: number;
  user_id: number;
};
