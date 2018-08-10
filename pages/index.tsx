import css from "../styles/global/index.scss";

import Navbar from "../components/navbar/navbar";
import About from '../components/about/about';
import Work from '../components/work/work';

const Index = () => (
  <div className={`${css.hero}`}>
    <Navbar />
    <About />
    <Work />
  </div>
);

export default Index;
