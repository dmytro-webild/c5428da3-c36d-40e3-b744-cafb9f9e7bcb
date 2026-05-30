"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="small"
        sizing="largeSmallSizeMediumTitles"
        background="none"
        cardStyle="gradient-mesh"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",
          id: "#home",
        },
        {
          name: "About",
          id: "#about",
        },
        {
          name: "Services",
          id: "#services",
        },
        {
          name: "Packages",
          id: "#packages",
        },
        {
          name: "Reviews",
          id: "#reviews",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="A-z Detailing"
    />
  </div>

  <div id="home" data-section="home">
      <HeroLogo
      logoText="A-z Detailing"
      description="Experience premium mobile car detailing that brings showroom shine directly to you. Your vehicle, redefined."
      buttons={[
        {
          text: "Book Now",
          href: "#contact",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/beautiful-car-washing-service_23-2149212227.jpg"
      imageAlt="Luxury car being detailed, showing a deep shine"
      showDimOverlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="About A-z Detailing"
      description={[
        "A-z Detailing offers exceptional mobile car detailing services right at your home or office. With years of experience and a passion for perfection, we transform your vehicle, bringing back its original luster and protecting its finish. We pride ourselves on attention to detail, using only the highest quality products.",
        "Our commitment to professionalism and customer satisfaction has earned us a reputation for excellence. We understand your car is an investment, and we treat it with the care and expertise it deserves. Let us give your car the meticulous attention it needs to look brand new again.",
      ]}
      buttons={[
        {
          text: "Our Services",
          href: "#services",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Exterior Detailing",
          description: "From a meticulous hand wash and wax to advanced paint correction, we restore your car's exterior to showroom quality, protecting it from the elements.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-person-cleaning-car-exterior_23-2148194110.jpg",
          imageAlt: "Car exterior being washed and waxed",
        },
        {
          title: "Interior Deep Clean",
          description: "We vacuum, shampoo, steam clean, and condition all interior surfaces, eliminating dirt, stains, and odors to create a fresh, immaculate cabin.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193618.jpg",
          imageAlt: "Car interior being vacuumed and cleaned",
        },
        {
          title: "Ceramic Coating",
          description: "Provide your vehicle with long-lasting protection and an incredible gloss finish. Our ceramic coatings offer superior durability against contaminants.",
          imageSrc: "http://img.b2bpic.net/free-photo/black-white-shot-liquid-drops-surface_181624-23567.jpg",
          imageAlt: "Car paint being ceramic coated",
        },
      ]}
      title="Our Premium Detailing Services"
      description="We offer a comprehensive range of detailing solutions tailored to your vehicle's needs, ensuring a pristine finish every time."
    />
  </div>

  <div id="packages" data-section="packages">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="two-columns-alternating-heights"
      useInvertedBackground={false}
      products={[
        {
          id: "package-1",
          name: "Express Shine",
          price: "$99",
          variant: "Exterior Wash & Wax",
          imageSrc: "http://img.b2bpic.net/free-photo/headlight-lamp-car_1339-3042.jpg",
          imageAlt: "Car being washed and waxed",
        },
        {
          id: "package-2",
          name: "Interior Refresh",
          price: "$149",
          variant: "Deep Interior Clean",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-dusting_23-2149172887.jpg",
          imageAlt: "Car interior being deep cleaned",
        },
        {
          id: "package-3",
          name: "Full Detail Pro",
          price: "$299",
          variant: "Interior & Exterior",
          imageSrc: "http://img.b2bpic.net/free-photo/minsk-belarus-dec-15-2021-car-bodies-are-assembly-line-factory-production-cars-modern-automotive-industry-electric-car-factory-conveyor-workers_645730-788.jpg",
          imageAlt: "Fully detailed car showing shine",
        },
        {
          id: "package-4",
          name: "Ceramic Protection",
          price: "$499",
          variant: "Long-Lasting Coating",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193579.jpg",
          imageAlt: "Car receiving ceramic coating",
        },
        {
          id: "package-5",
          name: "Executive Detail",
          price: "$399",
          variant: "Premium Interior & Exterior",
          imageSrc: "http://img.b2bpic.net/free-photo/old-red-car-with-ribbon_181624-38.jpg",
          imageAlt: "Luxury car after premium detailing",
        },
        {
          id: "package-6",
          name: "Exterior Restore",
          price: "$199",
          variant: "Paint Correction & Polish",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-man-painting-car-door_23-2149714289.jpg",
          imageAlt: "Car exterior being polished to perfection",
        },
      ]}
      title="Choose Your Detailing Package"
      description="Select from our range of comprehensive packages designed to fit every need and budget, from quick touch-ups to full transformations."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardFourteen
      useInvertedBackground={true}
      title="Our Commitment to Excellence"
      tag="Proven Results"
      metrics={[
        {
          id: "metric-1",
          value: "4.8",
          description: "Star Rating (13+ Reviews)",
        },
        {
          id: "metric-2",
          value: "100+",
          description: "Happy Clients",
        },
        {
          id: "metric-3",
          value: "5+",
          description: "Years Experience",
        },
      ]}
      metricsAnimation="blur-reveal"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardFifteen
      useInvertedBackground={false}
      testimonial="A-z Detailing is incredibly professional. Jay showed up on time, paid special attention to detail, and did excellent work at a fair price. My Lexus looks brand new again! Highly recommended for all your detailing needs."
      rating={5}
      author="Ryan B. & CeCe Marie"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/teen-age-youth-style-self-expression-concept-portrait-positive-happy-teenage-girl-with-bob-pinkish-hairstyle-facial-piercing-relaxing-indoors_343059-3781.jpg",
          alt: "Ryan B.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/unpleased-young-brunette-caucasian-girl-stands-with-crossed-arms-looking-side-pink_141793-92696.jpg",
          alt: "CeCe Marie",
        },
        {
          src: "http://img.b2bpic.net/free-photo/closeup-portrait-enthusiastic-excited-surprised-hispanic-guy-hear-amazing-news-open-mouth-bea_1258-113406.jpg",
          alt: "Brennan Harpster",
        },
        {
          src: "http://img.b2bpic.net/free-photo/authentic-book-club-scene_23-2150104578.jpg",
          alt: "Dilly Minilly",
        },
        {
          src: "http://img.b2bpic.net/free-photo/coffee-break_1098-14791.jpg",
          alt: "Maria S.",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "faq-1",
          title: "What areas do you serve?",
          content: "A-z Detailing proudly serves Palm Coast, FL, and surrounding areas. Please contact us to confirm service availability in your specific location.",
        },
        {
          id: "faq-2",
          title: "How long does a detailing service take?",
          content: "The duration varies depending on the chosen package and the vehicle's condition. Express services can take 1-2 hours, while full detailing may require 3-5 hours.",
        },
        {
          id: "faq-3",
          title: "Do I need to provide water or electricity?",
          content: "No, our mobile detailing unit is fully equipped with its own water and power supply. We bring everything needed to deliver a premium service right to your doorstep.",
        },
        {
          id: "faq-4",
          title: "What payment methods do you accept?",
          content: "We accept major credit cards, debit cards, and cash. Payment is due upon completion of service.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our mobile car detailing services and booking process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Get in Touch with A-z Detailing"
      description="Ready for a sparkling clean vehicle? Contact us today to schedule your mobile detailing service or get a custom quote. We bring the shine to you!"
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Your Email",
          required: true,
        },
        {
          name: "phone",
          type: "tel",
          placeholder: "Your Phone (Optional)",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "Your Message or Service Request",
        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-car-care-process_23-2149193555.jpg"
      imageAlt="Professional mobile car wash in progress"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/man-vacuuming-car-seats_23-2149316438.jpg"
      imageAlt="Interior of a garage with a perfectly detailed car"
      logoText="A-z Detailing"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Exterior Detailing",
              href: "#services",
            },
            {
              label: "Interior Deep Clean",
              href: "#services",
            },
            {
              label: "Ceramic Coating",
              href: "#services",
            },
            {
              label: "View All Packages",
              href: "#packages",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Client Reviews",
              href: "#reviews",
            },
            {
              label: "FAQs",
              href: "#faq",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "(386) 259-2925",
              href: "tel:+13862592925",
            },
            {
              label: "Email Us",
              href: "#contact",
            },
            {
              label: "Palm Coast, FL",
              href: "https://www.google.com/maps/place/34+Wood+Center+Ln,+Palm+Coast,+FL+32164",
            },
          ],
        },
      ]}
      copyrightText="© 2024 A-z Detailing. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
