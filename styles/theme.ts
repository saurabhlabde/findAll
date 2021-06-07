export interface ITheme {
  primary: string,
  secondary: string,
  b_primary: string,
  b_secondary: string,
  b_danger: string,
  t_primary: string,
  t_secondary: string,
  t_light: string
  t_orange: string
}

export const lightTheme: ITheme = {
  primary: "hsl(0, 0%, 100%)",
  secondary: "hsl(0, 18%, 95%)",
  b_primary: "hsl(220, 100%, 50%)",
  b_secondary: "hsl(36, 100%, 50%)",
  b_danger: "hsl(22, 100%, 50%)",
  t_primary: "hsl(0, 0%, 0%)",
  t_secondary: "hsl(0, 8%, 43%)",
  t_light: "hsl(0, 0%, 100%)",
  t_orange: '#FFA500'
};

export const darkTheme: ITheme = {
  primary: "",
  secondary: "",
  b_primary: "",
  b_secondary: "",
  b_danger: "",
  t_primary: "",
  t_secondary: "",
  t_light: "hsl(0, 0%, 100%)",
  t_orange: '#FFA500'
};
