import React from "react";

function SectionPartners() {
  return (
    <section className="section-partners">
      <div className="partners__title">Jesteśmy pełni zaufania</div>
      <div className="partners__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure
        commodi suscipit. Sed voluptatem dolores debitis accusantium, quasi
        vitae sit dolor aliquid enim animi ea repellendus quos laborum modi
        expedita natus eligendi neque! Ab inventore sint odit reprehenderit
        fugiat praesentium repellendus, eius illo dolores earum sequi soluta
        nisi error id vero perspiciatis magni voluptas maxime nesciunt,
        molestias iste, sed tempore minus? Recusandae alias explicabo minus
        aperiam nemo possimus temporibus, qui deserunt ipsam autem deleniti
        totam magnam! Et maiores corporis inventore ipsa est, commodi dolorem,
        at nesciunt quo expedita minima ullam facilis odio? Aliquid saepe amet
        error consectetur voluptas. Facere, eos!
      </div>
      <div className="partners__container">
        <div className="container__partner">
          <img
            className="image-element"
            src={require("../../../assets/images/product-template.png")}
          />
        </div>
        <div className="container__partner">
          <img
            className="image-element"
            src={require("../../../assets/images/product-template.png")}
          />
        </div>
        <div className="container__partner">
          <img
            className="image-element"
            src={require("../../../assets/images/product-template.png")}
          />
        </div>
        <div className="container__partner">
          <img
            className="image-element"
            src={require("../../../assets/images/product-template.png")}
          />
        </div>
        <div className="container__partner">
          <img
            className="image-element"
            src={require("../../../assets/images/product-template.png")}
          />
        </div>
        <div className="container__partner">
          <img
            className="image-element"
            src={require("../../../assets/images/product-template.png")}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionPartners;
