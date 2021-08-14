import {
  ProjectPage,
  ProjectTitle,
  ProjectSubTitle,
  ProjectImageTall,
  ProjectImageIntro,
  ProjectImageWide,
  ProjectParagraph,
  SectionHeader,
  ProjectVideoWide,
  ParagraphBreak,
} from "../ProjectPage/ProjectPage";
import { PageHeader } from "../PageHeader/PageHeader";
import projectPageStyles from "../ProjectPage/ProjectPage.module.css";

export function CryptoTrader() {
  const projectDetails = {
    title: "Crypto-Currency Trader",
    subtitle: "",
  };
  return (
    <ProjectPage projectDetails={projectDetails}>
      <ProjectTitle>Monocopter</ProjectTitle>
      <ProjectSubTitle> </ProjectSubTitle>
      <ProjectImageIntro
        imageUrl={"../images/cryptoCurrency/cryptoIntro.png"}
      />
      <SectionHeader>Introduction</SectionHeader>
      <ProjectParagraph>
        The purpose of this project was to build a general purpose
        crypto-currency trader which could automatically trade crypto-currency
        for profit. While I know little about trading and cryptocurrency, I
        thought this would be a fun project with the added benefit of possibly
        making some money. The project described below is certainly unfinished
        and will be updated intermittently in the future.
      </ProjectParagraph>
      <SectionHeader>Design</SectionHeader>
      <ProjectParagraph>
        I call this project a crypto-currency trader however its main utility to
        me and possibly others is as a trader manager. Given my inexperience
        trading and with cryptocurrency in general, I wanted to build out a
        framework which would allow me to experiment with different trading
        strategies (aka traders), possibly multiple at the same time. I decided
        to do so by building a trader manager, which could be configured to run
        an arbitrary number of traders with different settings simultaneously.
      </ProjectParagraph>
      <ParagraphBreak />
      <ProjectParagraph>
        To describe the basic structure of the code, I created a simple graphic
        which can be seen below:
      </ProjectParagraph>
      <ProjectImageWide
        captionText={
          "A schematic describing the structure of the cryptocurrency trader."
        }
        imageUrl={"../images/cryptocurrency/CryptoTraderSchematic.png"}
      />
      <ProjectParagraph>
        As is visible in the schematic above, there a 3 basic classes in this
        project, the Trade Manager, Traders (for which there may be multiple),
        and a Data Manager.
      </ProjectParagraph>
      <ParagraphBreak />
      <ProjectParagraph>
        The role of the data manager is to provide basic methods for data
        gathering and formatting which traders are likely to use. Any specific
        data manipulation, such as pre-processing for a given neural network, is
        implemented in each trader class.
      </ProjectParagraph>
      <ParagraphBreak />
      <ProjectParagraph>
        The role of the trader is to make and execute trade decisions based off
        historical and current market data gathered with the help of the data
        manager. Traders make use of the Binance API Wrapper directly to do
        things like make buy/sell orders. Traders also use the Data Manager and
        Data Storage layers to gather and update data for use in training and
        testing their strategies.
      </ProjectParagraph>
      <ParagraphBreak />
      <ProjectParagraph>
        The role of the trade manager is to handle and coordinate multiple
        traders acting on the same account. This involves ensuring that API
        request limits are not exceeded and that traders are run in an organized
        fashion.
      </ProjectParagraph>
      <ParagraphBreak />
      <SectionHeader>Testing</SectionHeader>
      <ProjectParagraph>
        To build out the trader manager, it was useful to build some simple
        traders to test and experiment with. The first is a simple linear
        trader, which performs a linear regression on the last N data points.
        The second is a simple multi-layer perceptron network which uses the
        last N data points to make a prediction about the next interval's price.
        The performance of such traders on historical data is shown below:
      </ProjectParagraph>

      <ProjectImageWide
        captionText={
          "A plot of the total earnings (scaled) of the simple linear regression trader in blue along with the performance of the market in red."
        }
        imageUrl={"../images/cryptocurrency/simpleLinear.png"}
      />

      <ProjectImageWide
        captionText={
          "A plot of the total earnings (scaled) of the simple network trader in blue along with the performance of the market in red."
        }
        imageUrl={"../images/cryptocurrency/simpleNetwork.png"}
      />
      <ProjectParagraph>
        Ignoring the units for the blue line we can see that both for the linear
        regression trader and simple network trader, there is a loss. The
        earnings calculated for the linear and network traders were
        approximately -118 and -132 respectively and were calculate by assuming
        that a unitless amount 1 was traded each time the algorithms determined
        it appropriate.
      </ProjectParagraph>
      <ParagraphBreak>
        As is clear in the graphs above, the performance is pretty abysmal.
        However, these are simply test networks and algorithms to ensure the
        trader manager and data manager are both working. Traders used in
        reality will need to be much more effective in order to be considered
        being run.
      </ParagraphBreak>

      <SectionHeader>More Info</SectionHeader>
      <ProjectParagraph>
        To read more about this project or perhaps to download the source code,
        please check out the github repo{" "}
        <a
          href="https://github.com/griffstaples/CryptocurrencyTrader"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <b>here</b>
        </a>
        .
      </ProjectParagraph>
    </ProjectPage>
  );
}
