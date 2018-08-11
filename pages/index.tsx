import styles from "../styles/global/index.scss";

import Navbar from "../components/navbar/navbar";
import About from '../components/about/about';
import Work from '../components/work/work';
import Gallery from '../components/gallery/gallery';

const Index = () => (
  <div className={`${styles}`}>
    <Navbar />
    <About />
    <Work />
    <Gallery />
  </div>
);

export default Index;
