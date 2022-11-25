import { useCustomCursor } from "hooks/useCustomCursor";
import type { AppProps } from "next/app";
import { robotoFlex } from "styles/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  const CustomCursor = useCustomCursor();

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
          * {
            cursor: none !important;
          }
        `}
      </style>
      {CustomCursor}
      <Component {...pageProps}></Component>
    </>
  );
}
