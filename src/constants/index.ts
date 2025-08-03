export const queryKeys = {
  treatments: "treatments",
  appointments: "appointments",
  staff: "staff",
  user: "user",
};

export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const PASSWORD_LENGTH = 12;
export const PASSWORD_REGEX = new RegExp(
  `^(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W_]).{${PASSWORD_LENGTH},}$`
);
