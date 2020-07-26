/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import PropTypes from "prop-types";
import BannerHome from "./components/BannerHome";
import Support from "./components/Support";
import BannerSection from "./components/BannerSection";
import NewArrivalsSection from "./components/NewArrivalsSection";
import PromoBannerSection from "./components/PromoBannerSection";
import CategoriesSection from "./components/CategoriesSection";
import InstagramSection from "./components/InstagramSection";

function Home(props) {
  return (
    <main id="content" className="main-content-wrapper">
      <BannerHome />
      {/* Start of Support Section */}
      <Support />
      {/* End of Support Section */}
      {/* Start of Banner Section */}
      <BannerSection />
      {/* End of Banner Section */}
      {/* Start of New Arrivals Section */}
      <NewArrivalsSection />
      {/* End of New Arrivals Section */}
      {/* Start of Promo Banner Section */}
      <PromoBannerSection />
      {/* End of Promo Banner Section */}
      {/* Start of Categories Section */}
      <CategoriesSection />
      {/* End of Categories Section */}
      {/* Start of Instagram Section */}
      <InstagramSection />
      {/* End of Instagram Section */}
    </main>
  );
}

Home.propTypes = {};

export default Home;
