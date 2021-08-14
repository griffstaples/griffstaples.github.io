import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/About/About";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { Monocopter } from "./components/Monocopter/Monocopter";
import { CryptoTrader } from "./components/CryptoTrader/CryptoTrader";
import { BloodPressure } from "./components/BloodPressure/BloodPressure";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>
        <Header />
        <Switch>
          <div className={styles.contentContainer}>
            <Route exact path="/" component={About}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/projects/monocopter" component={Monocopter}></Route>
            <Route
              path="/projects/cryptotrader"
              component={CryptoTrader}
            ></Route>
            <Route
              path="/projects/bloodpressure"
              component={BloodPressure}
            ></Route>
          </div>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
