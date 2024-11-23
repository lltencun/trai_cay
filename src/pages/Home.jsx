import { BestSeller } from "../components/BestSeller";
import Hero from "../components/Hero";
import LatestStore from "../components/LatestStore";
import Ourpolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />

      <LatestStore />
      <BestSeller />
      <Ourpolicy />
    </div>
  );
};

export default Home;
