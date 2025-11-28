import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';
import CustomerReviews from './components/CustomerReviews';
import ActivitiesWidget from './components/ActivityWidget';
import CarsShowcase from './components/Carview';



export default function HomePage() {
  return (
    <>
      <Navbar />
      <main >
        <Hero />
        <CarsShowcase />
        <FeaturedCars />
        <GetStarted />
        <CustomerReviews />
        <ActivitiesWidget />
        
      </main>
      <Footer />
    </>
  );
}
