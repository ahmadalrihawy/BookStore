import { useState } from "react";
import Cart from "../components/Cart/Cart";
import ChaptersPreview from "../components/ChapterPreview/ChaptersPreview";
import ParallixCards from "../components/ChapterPreview/ParallixCards/ParallixCards";
import Chapters from "../components/Chapters/Chapters";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import { useProduct } from "../Context/ProductContext"; // Import the useProduct hook

function Home() {
  const [showContent, setShowContent] = useState(false);
  const { user } = useProduct(); // Access the user state
  const isLoggedIn = user || localStorage.getItem("userId");
  // const userName = localStorage.getItem("username");

  return (
    <main>
      {isLoggedIn && <Cart />} {/* Show the Cart only if user is logged in */}
      <section id="home" className="hero-section">
        <div className="container">
          <Header />
          <Hero />
        </div>
      </section>
      <section id="Features" className="features-section">
        <Features />
      </section>
      <section id="chapters">
        <Chapters />
      </section>
      <section id="products">
        <Products />
      </section>
      <section id="preview">
        <ChaptersPreview setShowContent={setShowContent} />
      </section>
      <div
        className={"parallixCardsContainer"}
        style={showContent ? { display: "block" } : {}}
      >
        <ParallixCards />
      </div>
      <section id="contact">
        <Contact />
      </section>
      <section className="footer">
        <Footer />
      </section>
    </main>
  );
}

export default Home;
