import React from "react";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "../../scss/pages/AboutUsPage/AboutUsPage.css";

function AboutUsPage() {
  return (
    <div className="aboutus-container">
      <Header withContent={false} />
      <main className="aboutus-container__main">
        <div className="main__header">
          <div className="main__title">O nas</div>
          <div className="main__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
            hic minima quasi reprehenderit sit id ducimus voluptas vel?
            Dignissimos, sit vel! Maiores quaerat odio iure doloremque, laborum
            exercitationem veritatis dignissimos perferendis corporis neque modi
            consectetur. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Velit repellat totam consectetur reprehenderit tempora. Sit
            vitae error reprehenderit, quis sapiente facere cumque atque
            reiciendis. Omnis commodi repellendus magnam doloremque animi non
            sapiente cum quidem! Officia nulla pariatur porro autem amet esse
            animi. Aliquam sint odit corrupti iste, placeat quibusdam et? Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati quis
            quas, nesciunt dolore placeat illum est expedita laborum incidunt
            cumque perspiciatis vel rem cum, atque reprehenderit nemo voluptate
            ut culpa velit asperiores laudantium officiis optio? Neque ea
            molestiae illum soluta laboriosam architecto eos delectus qui,
            debitis quis autem alias voluptate!
          </div>
        </div>
        <div className="main__photography">
          <img
            className="image-element"
            src={require("../../assets/images/product-template.png")}
          />
        </div>
        <div className="main__description">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          tempora, voluptatibus accusamus eum vero doloremque praesentium hic
          autem, error veniam enim ab quos harum! Amet temporibus ut repudiandae
          cumque laboriosam error nostrum! Quis maxime perspiciatis iure
          accusantium? Quas commodi a facilis labore non similique, molestias
          debitis dolor! Odio tenetur officiis impedit tempore praesentium nulla
          dolor natus ullam vitae! Dicta neque sequi ducimus natus tenetur. Ab
          dignissimos corporis corrupti, distinctio delectus nobis blanditiis
          rem beatae adipisci similique sapiente reiciendis asperiores officiis
          fuga facilis ratione debitis suscipit nulla a enim aliquam omnis
          perferendis magni iure? Rerum ut sunt, voluptatem repudiandae,
          officiis fuga, id enim architecto sequi corporis beatae?
          Exercitationem sequi ad vel quis culpa architecto non, quaerat
          voluptates totam accusantium delectus dolorum, perferendis nesciunt
          ipsum commodi aperiam modi. Doloremque cupiditate, excepturi explicabo
          qui nesciunt eum debitis labore, id corrupti, animi deleniti ea quas
          hic aut magnam asperiores quos! Odio reprehenderit aut perspiciatis?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
          laudantium fuga nobis voluptate voluptas quo eius sunt cupiditate
          aspernatur, obcaecati quibusdam consequuntur minus in corrupti dolores
          dolorum esse unde consequatur deserunt neque ea et. Repudiandae ipsum
          animi iste aut nisi nobis voluptatem blanditiis aliquam dicta debitis,
          praesentium non corrupti vel vero quo temporibus ducimus facere.
          Facere incidunt aliquam debitis blanditiis dolorem perspiciatis, natus
          adipisci quos nulla rem itaque beatae quae excepturi hic deleniti
          nobis voluptas perferendis voluptatem nihil consequuntur placeat
          doloribus odio! Sed odio perspiciatis non porro eum consequuntur
          laudantium dolorem, quo eaque corrupti, incidunt quas laboriosam
          molestias, quae repellat.
        </div>
        <div className="main__photography">
          <img
            className="image-element"
            src={require("../../assets/images/product-template.png")}
          />
        </div>
        <div className="main__work">
          <div className="main__work__title">Dołącz do Nas!</div>
          <div className="main__work__text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            laudantium soluta nobis dolorem non, earum dolor quidem porro autem
            officia dolores fugiat odio in ad ab blanditiis! Nostrum modi
            consequatur neque fugiat sunt illo. Error labore, iusto consequatur
            accusamus asperiores rem animi saepe nobis vitae quae, odio
            perferendis qui nisi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptate autem sapiente magnam veniam quibusdam
            pariatur tempora deleniti dolor non, itaque voluptas debitis est
            officiis tenetur labore recusandae, tempore quae facilis?
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
