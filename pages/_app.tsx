import { GlobalStyle } from "../styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme";

// type
import { ITheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const activeTheme = "light";

  const theme: ITheme | null =
    activeTheme === "light"
      ? lightTheme
      : activeTheme === "dark"
      ? darkTheme
      : null;

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
