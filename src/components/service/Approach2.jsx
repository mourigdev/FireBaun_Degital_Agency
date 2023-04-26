import React from "react";

const approachContent = [
  {
    title: "Collaborative Approach",
    descriptions: "We believe in a collaborative approach to website design. We work closely with our clients to understand their needs and goals, and involve them in the design process from start to finish.",
    delayAnimation: "0",
    },
    {
    title: "User-Centered Design",
    descriptions: "We prioritize user needs and behavior when designing websites. By focusing on usability and accessibility, we create websites that are intuitive and easy to navigate for all users.",
    delayAnimation: "100",
    },
    {
    title: "Responsive Design",
    descriptions: "We design websites that are optimized for all devices, from desktops to smartphones. Our responsive design approach ensures that your website looks great and functions well, no matter how your audience accesses it.",
    delayAnimation: "200",
    },
    {
    title: "Data-Driven Design",
    descriptions: "We use data to inform our design decisions and improve website performance. By analyzing user behavior and feedback, we continuously optimize and enhance your website to ensure it meets your goals and delivers results.",
    delayAnimation: "300",
    },
];

const Approach2 = () => {
  return (
    <ul className="ptf-process-steps">
      {approachContent.map((val, i) => (
        <li
          className="ptf-process-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <h6 className="ptf-process-item__title">{val.title}</h6>
          <p className="ptf-process-item__text">{val.descriptions}</p>
        </li>
      ))}
    </ul>
  );
};

export default Approach2;
