import type { AppProps } from "next/app";
import { Colours } from "styles/Colours";
import { sourceCodePro } from "styles/Fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html,
          body {
            font-family: ui-monospace, "SF Mono", "Roboto Mono",
              ${sourceCodePro.style.fontFamily}, monospace;
            color: white;
            margin: 0;
            padding: 0;
            height: 100%;
            line-height: 1.3;
            background-color: ${Colours.BackgroundColorDark};
            overflow-x: hidden;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          body::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <Component {...pageProps}></Component>
    </>
  );
}
