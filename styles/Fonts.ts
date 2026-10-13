/**
 * Next fonts automatically downloads and locally hosts imported fonts at build time.
 * This eliminates time spent fetching fonts from a CDN at run time at the cost of
 * a slightly larger asset size. It also prevents flashes of unstyled content as
 * content loads from the CDN. For this to work, the font needs to be loaded where
 * it us used (i.e. it cannot exist in a utility file)
 */
import { Source_Code_Pro, Archivo } from "@next/font/google";

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

// Prefers the OS's native monospace face (matches the render-J mockups,
// which never loaded a custom monospace webfont) and only falls back to
// the self-hosted Source Code Pro where no system monospace is available.
export const monospaceFontStack = (fallback: string) =>
  `ui-monospace, "SF Mono", "Roboto Mono", ${fallback}, monospace`;

export const archivoNarrow = Archivo({
  weight: "100",
  subsets: ["latin"],
});
