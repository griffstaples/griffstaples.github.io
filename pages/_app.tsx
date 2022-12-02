import { useCustomCursor } from "hooks/useCustomCursor";
import type { AppProps } from "next/app";
import { Colours } from "styles/Colours";
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
            padding: 0;
            height: 100%;
            line-height: 1.3;
            background-color: ${Colours.BackgroundColorDark};
            overflow-x: hidden;
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
