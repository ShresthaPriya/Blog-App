import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
// import Card from "../components/Card"
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";



const Home  = () => {

  
  return (
    <div>
      <Navbar />
      <Hero />
      <BlogList/>
      <Footer/>

    </div>
  );
};

export default Home;