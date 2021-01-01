import React from "react";
import FeaturesSection from "../../components/FeaturesSection/index";
import HeroSection from "../../components/HeroSection";
import TestimonialsSection from "../../components/TestimonialsSection";
import NewsletterSection from "../../components/NewsletterSection";
// import { useRouter } from "../../util/router.js";

import headerImg from "../../assets/img/header-img.svg";
import { getAppRedirect } from "../../util/helper-functions";

function IndexPage(props) {
  // const router = useRouter();

  return (
    <>
      <HeroSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Start selling online now with Jumga."
        subtitle="Set up your store in minutes and bring your brand to life."
        buttonText="Join Jumga"
        buttonColor="primary"
        image={headerImg}
        buttonOnClick={() => {
          window.location.replace(getAppRedirect("seller", "register"));
        }}
      />

      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="So easy and seamless, you’ll be up and running in minutes."
      />
      <TestimonialsSection
        bg="light"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Here's what people are saying"
        subtitle=""
      />
      <NewsletterSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;
