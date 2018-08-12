import styles from "../styles/global/index.scss";

import Navbar from "../components/navbar/navbar";
import About from '../components/about/about';
import Work from '../components/work/work';
import Gallery from '../components/gallery/gallery';
import Contact from '../components/contact/contact';

const Index = () => (
  <div className={`${styles}`}>
    <Navbar />
    <About />
    <Work />
    <Gallery />
    <Contact />
  </div>
);

export default Index;
