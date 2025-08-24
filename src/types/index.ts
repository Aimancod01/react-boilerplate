export type User = {
  id: number;
  name: string;
  email: string;
  address: string | null;
  city: string | null;
  country: string | null;
  state: string | null;
  postal_code: string | null;
  number: string | null;
  image: string | null;
  gender: string | null;
  birth_date: string | null;
  premium: boolean;
  role_id: number;
  status: string;
  type: string;
  created_at: string;
  updated_at: string;
  last_login: string;
  deleted: boolean;
  google_id: string | null;
  apple_id: string | null;
  remember_token: string | null;
  lat_long: string | null;
  created_by: string | null;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  payload: {
    accessToken: string;
    user: User;
  };
};
