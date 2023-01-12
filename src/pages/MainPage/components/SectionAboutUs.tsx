import React from "react";

function SectionAboutUs() {
  return (
    <section className="section-aboutus">
      <div className="aboutus__container">
        <div className="container__title">Czym jest FOODY?</div>
        <div className="container__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum
          voluptates molestiae iste officia itaque soluta architecto nulla a
          recusandae aliquid excepturi, ea similique earum magnam, nemo,
          perspiciatis accusamus illum culpa laboriosam voluptatibus ullam
          ducimus corrupti totam doloribus. Cumque vero voluptates praesentium,
          exercitationem voluptatem ad aliquid rem recusandae adipisci,
          repellendus debitis quaerat saepe! Nisi quasi possimus numquam eveniet
          temporibus modi magni laborum voluptatibus ab iure quod vitae omnis,
          ad alias ipsum rerum doloremque harum facere repudiandae id neque
          repellendus ipsam. Enim cumque veritatis provident deleniti natus
          repellat aspernatur, consequuntur fugiat quod autem animi dicta
          soluta. Dolores recusandae consectetur asperiores mollitia pariatur.
        </div>
        <div className="container__image">
          <img
            className="image-element"
            src={require("../../../assets/images/product-template.png")}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionAboutUs;
