import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-website-rank",
    titlePart1: "WEBSITE",
    titlePart2: "DESIGN",
    descriptions: ` We help ambitious brands create impactful online experiences that drive traffic, engagement, and conversion.`,
    to:"/service-details"
  },
  {
    icon: "lnil lnir-cloud-computing",
    titlePart1: "WEBSITE",
    titlePart2: "Maintenance",
    descriptions: ` We offer reliable and comprehensive website maintenance services to keep your site up-to-date and secure.`,
    to:"/WebsiteMaintenance"
  },
  {
    icon: "lnir lnir-mobile-alt-1",
    titlePart1: "MOBILE",
    titlePart2: "APPLICATION",
    descriptions: ` Designing impactful mobile apps experience that drive user adoption and conversion.`,
    to:"/MobileApplication"
  },
  {
    icon: "lnir lnir-megaphone",
    titlePart1: "DIGITAL",
    titlePart2: "MARKETING",
    descriptions: ` At Bounfire, we are passionate about helping our clients achieve exceptional sales conversions and ROI through our comprehensive digital marketing services`,
    to:"/DegitalMarketing"
  },
  {
    icon: "lnir lnir-layers-alt-1",
    titlePart1: "BRAND",
    titlePart2: "DESIGN",
    descriptions: ` We ignite brands with creative and strategic solutions. Our team of branding experts and designers work together to create powerful brand experiences `,
    to:"/service-details"
  },
  {
    icon: "lnir lnir-atom",
    titlePart1: "Bots &",
    titlePart2: "Automatisation",
    descriptions: ` Automation is a game-changer for businesses, improving employee efficiency and productivity while minimizing delivery time and maximizing savings `,
    to:"/service-details"
  },
  {
    icon: "lnil lnir-bubble",
    titlePart1: "CONTENT",
    titlePart2: "CREATION",
    descriptions: ` We create compelling content that captivates and engages your audience.    
    from blog posts to social media campaigns, we specialize in crafting content that resonates with your target market. `,
    to:"/service-details"
  },
  {
    icon: "lnil lnil-video-camera-alt-1",
    titlePart1: "Visual",
    titlePart2: "Marketing",
    descriptions: ` We specialize in crafting captivating visual content that drives engagement and conversion for your brand.`,
    to:"/service-details"
  },
];

const ServiceOne = () => {
  return (
    <>
      {serviceContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
            <Link
              to={val.to}
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;
