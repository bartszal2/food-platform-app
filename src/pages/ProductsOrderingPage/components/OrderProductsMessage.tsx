import React, { useEffect } from "react";
import "../../../scss/pages/ProductsOrderingPage/components/OrderProductsMessage.css";
import { scrollWindowToTop } from "../../../utils/scrollWindowToTop";

function OrderProductsMessage() {
  useEffect((): void => {
    scrollWindowToTop();
  }, []);

  return (
    <div className="status-order">
      <div className="status-order__header">
        <div className="status-order__header__title">
          Twoje zamówienie zostało złożone
        </div>
        <div className="status-order__header__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          temporibus iure sapiente, quaerat corporis quidem, sed eum
          consequuntur mollitia necessitatibus quam porro asperiores minus quo
          facere veniam, dignissimos eligendi quae earum architecto. Vel amet
          adipisci animi quidem deleniti reiciendis quasi eligendi nostrum
          labore sequi quos quo perspiciatis corrupti est iusto corporis rem
          voluptates ducimus eveniet asperiores dolores optio neque, quaerat
          nisi! Debitis velit animi nesciunt? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Placeat molestias eveniet quas
          repellendus minima ullam ipsum vel obcaecati beatae natus, eum
          officia. Odio maxime reprehenderit vitae rerum quae error veritatis
          impedit rem quas. Quam tempora similique nam obcaecati ea, aliquid
          nihil optio sed et doloremque?
        </div>
        <div className="status-order__notification-container">
          <div className="status-order__notification">
            Twoje zamówienie będzie gotowe za 45 minut
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProductsMessage;
