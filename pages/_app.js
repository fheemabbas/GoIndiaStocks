import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps: { ...pageProps } }) {
  return (
    <RecoilRoot>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
