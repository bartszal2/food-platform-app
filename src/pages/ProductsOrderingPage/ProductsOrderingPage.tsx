import React, { useState } from "react";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import { useAppDispatch } from "../../hooks/hooks";
import { RESET_SHOPPING_CART } from "../../redux/slices/clientShoppingCartSlice";
import OrderProductsMessage from "./components/OrderProductsMessage";
import AgreementSection from "./components/AgreementSection";
import BannerSection from "./components/BannerSection";
import ClientOrderForm from "./components/ClientOrderForm";
import DeliveryOrderForm from "./components/DeliveryOrderForm";
import PaymentOrderForm from "./components/PaymentOrderForm";
import ShoppingCartSection from "./components/ShoppingCartSection";
import SummaryOrderFrom from "./components/SummaryOrderFrom";
import "../../scss/pages/ProductsOrderingPage/ProductsOrderingPage.css";
import { FILL_UP_FORM } from "../../redux/slices/productsOrderingPageSlice";
import { AppDispatch } from "../../redux/store";

function ProductsOrderingPage() {
  const [order, setOrder] = useState<boolean>(false);

  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="productsordering-container">
      <Header withContent={false} />
      {order ? (
        <OrderProductsMessage />
      ) : (
        <main className="products-ordering-section">
          <form
            onSubmit={(e) => {
              e.preventDefault(),
                setOrder(true),
                dispatch(FILL_UP_FORM({ value: "", name: "reset-values" })),
                dispatch(RESET_SHOPPING_CART());
            }}
          >
            <section className="products-ordering-section__blocks-container">
              <ShoppingCartSection />
              <ClientOrderForm />
              <DeliveryOrderForm />
              <PaymentOrderForm />
            </section>
            <section className="products-ordering-section__footer-blocks-container">
              <AgreementSection />
              <BannerSection />
              <SummaryOrderFrom />
            </section>
          </form>
        </main>
      )}
      <Footer />
    </div>
  );
}

export default ProductsOrderingPage;
