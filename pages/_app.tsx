import type { AppProps } from "next/app";
import { robotoFlex } from "styles/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            font-family: ${robotoFlex.style.fontFamily};
            color: white;
            margin: 0;
            height: 100%;
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
