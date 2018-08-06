import css from "../styles/global/index.scss";

import Navbar from "../components/navbar/navbar";
import About from '../components/about/about';

const Index = () => (
  <div className={`${css.hero}`}>
    <Navbar />
    <About />
  </div>
);

export default Index;
