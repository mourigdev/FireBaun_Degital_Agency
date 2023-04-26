import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import ServiceListThree from "../../../components/list/ServiceListThree";
import Faq from "../../../components/faq/Faq";
import Skills from "../../../components/skill/Skills";
import Approach2 from "../../../components/service/Approach2";
import CounterThree from "../../../components/counter/CounterThree";
import ImageGridFour from "../../../components/image-grid/ImageGridFour";

const ServiceDetails = () => {
  return (
    <div>
      <Helmet>
        <title>Firebaun - Degital Marketing Service Details</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--service-detail">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-9">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Degital Marketing</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                    At FireBaun Agency, we are passionate about helping our clients achieve exceptional sales conversions and ROI through our comprehensive digital marketing services, we understand that your online presence is critical to the success of your business. That's why we offer comprehensive digital marketing services designed to help you grow your business online. Our team of experts will work closely with you to develop a customized digital marketing strategy that meets your specific business needs.
                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                </div>
                <div className="col-lg-12">
                  {/* <!--Animated Block--> */}
                  <ImageGridFour image="assets/img/DegitalMarketing.jpg" />
                </div>
              </div>
            </div>
          </section>
          {/* Top Portion */}

          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <p className="fz-18">
                    We specialize in a range of digital marketing services, including search engine optimization (SEO), social media marketing, email marketing, content marketing, and more. With years of experience and a track record of success, we have the skills and knowledge needed to help your business reach its full potential online.

</p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    {/* <h3>Specialization</h3> */}
                    {/* <!--Spacer--> */}
                    {/* <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div> */}
                    <p className="fz-18">
                    Our approach to digital marketing is based on data and analytics. We use the latest tools and techniques to analyze your website traffic, social media metrics, and other key performance indicators to determine the most effective marketing strategies for your business. This data-driven approach ensures that we are always optimizing our strategies to achieve the best possible results for your business.

</p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.125rem" }}
                  ></div>
                  {/* <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <CounterThree />
                  </div> */}
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Skills</h3>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.75rem" }}
                  ></div>
                  <div className="ptf-skill-box-grid">
                    <Skills logo={[
                      "seo.png",
                      "socialmedia.png",
                      "image-3.png",
                      "image-4.png",
                      "image-5.png",
                      "image-6.png"]}
                      title={[
                        "SEO",
                        "Media Marketing",
                        "image-3",
                        "image-4",
                        "image-5",
                        "image-6"]}/>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.875rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Approach</h3>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">
                    Whether you're a small business just starting out or a large corporation looking to expand your online presence, we can help. Contact us today to learn more about how we can help you grow your business with our digital marketing services.
                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5.625rem" }}
                  ></div>
                  {/* <!--Process Steps--> */}
                  <Approach2 />
                </div>
                <div className="col-xl-4">
                  <div className="ptf-sidebar ptf-sidebar--right">
                    {/* <!--Widget--> */}
                    <div className="ptf-widget ptf-widget-services-list">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">Services List</h4>
                        <ServiceListThree />
                      </div>
                    </div>
                    {/* <!--Widget--> */}
                    <div className="ptf-widget ptf-widget-faq">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">FAQs</h4>
                        <Faq />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End .main content with sidebar */}
        </div>
        {/* End .ptf-page */}
      </div>
      {/* End ptf-main */}

      {/*=============================================
        Start Footer
        ============================================== */}
      <footer className="ptf-footer ptf-footer--style-1">
        <div className="container-xxl">
          <div className="ptf-footer__top">
            <Footer />
          </div>
          <div className="ptf-footer__bottom">
            <CopyRight />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetails;
