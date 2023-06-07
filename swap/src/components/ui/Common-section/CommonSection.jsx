import React from "react";
import "./common-section.css";

import { Container } from "reactstrap";

const CommonSection = ({ title, slogan }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h2>{title}</h2>
        <span>{slogan}</span>
      </Container>
    </section>
  );
};

export default CommonSection;
