import React from "react";
import "../../scss/pages/MainPage/MainPage.css";
import Footer from "../../layouts/Footer/Footer";
import SectionMain from "./components/SectionMain";
import SectionSeasonOffer from "./components/SectionSeasonOffer";
import SectionAboutUs from "./components/SectionAboutUs";
import SectionPartners from "./components/SectionPartners";
import Header from "../../layouts/Header/Header";
import ProductOrderingModal from "../../layouts/OrderingModalWindow/OrderingModalWindow";
import { useAppSelector } from "../../hooks/hooks";
import { modalOrderingWindowSliceTypes } from "../../types/slices/modalOrderingWindowSliceTypes";
import { RootState } from "../../redux/store";

function MainPage() {
  const modalOrderingWindow: modalOrderingWindowSliceTypes = useAppSelector((state: RootState) => state.modalOrderingWindow.value);

  return (
    <div className="main-container">
      {modalOrderingWindow.viewModalWindow ? <ProductOrderingModal /> : ""}
      <Header withContent={true} />
      <SectionMain />
      <SectionSeasonOffer />
      <SectionAboutUs />
      <SectionPartners />
      <Footer />
    </div>
  );
}

export default MainPage;
