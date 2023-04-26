import React from "react";

const approachContent = [
  {
    subTitle: "ONE",
    title: "Research",
    descriptions: `We begin by conducting thorough research to gain a deep understanding of your business, your target audience, and your industry. Our team uses various research methods to gather insights that will inform our approach, including market research, competitor analysis, and user testing.`,
    delayAnimation: "0",
  },

  {
    subTitle: "TWO",
    title: "Concept",
    descriptions: `Based on our research findings, we develop creative concepts that align with your business goals and resonate with your target audience. Our team works closely with you to refine these concepts until we arrive at a strategy that will guide our work moving forward.`,
    delayAnimation: "100",
  },
  {
    subTitle: "THREE",
    title: "Strategy",
    descriptions: `With our creative concept in place, we develop a comprehensive strategy that outlines the tactics we'll use to achieve your business goals. Our team considers a range of factors when developing your strategy, including budget, timeline, and available resources.`,
    delayAnimation: "200",
  },
  {
    subTitle: "FOUR",
    title: "Development",
    descriptions: `With our strategy in place, our team gets to work on bringing your project to life. Whether we're developing a website, creating marketing materials, or building a custom software solution, we approach each project with the same level of care and attention to detail.`,
    delayAnimation: "300",
  },
  {
    subTitle: "FIVE",
    title: "Test",
    descriptions: `Before launching your project, we conduct thorough testing to ensure everything is functioning as it should. Our team tests for a range of factors, including functionality, usability, and performance, to ensure your project is ready for prime time.`,
    delayAnimation: "400",
  },
  {
    subTitle: "SIX",
    title: "Hand Over",
    descriptions: `Once your project is complete and has passed our rigorous testing, we hand it over to you for final review. Our team is on hand to provide any necessary support and ensure a smooth transition, so you can start seeing the results of your investment.`,
    delayAnimation: "500",
  },

];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content">
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
