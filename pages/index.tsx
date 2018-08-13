import Navbar from "../components/navbar/navbar";
import About from "../components/about/about";
import Work from "../components/work/work";
import Gallery from "../components/gallery/gallery";
import Contact from "../components/contact/contact";

import globalStyles from "../styles/global/index.scss"

const Index = () => {
  return (
    <div className={`${globalStyles}`}>
      <Navbar />
      <About />
      <Work />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
