/**
 * Next fonts automatically downloads and locally hosts imported fonts at build time.
 * This eliminates time spent fetching fonts from a CDN at run time at the cost of
 * a slightly larger asset size. It also prevents flashes of unstyled content as
 * content loads from the CDN. For this to work, the font needs to be loaded where
 * it us used (i.e. it cannot exist in a utility file)
 */
import { Roboto_Flex, Source_Code_Pro, Archivo } from "@next/font/google";

export const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export const robotoFlex = Roboto_Flex({
  weight: "100",
  subsets: ["latin"],
});

export const archivoNarrow = Archivo({
  weight: "100",
  subsets: ["latin"],
});
