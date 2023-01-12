import React from "react";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import "../../scss/pages/ErrorPage/ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-container">
      <Header withContent={false} />
      <main className="main">
        <div className="main__title">Upss.. Nie znaleziono takiej strony</div>
        <div className="main__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
          molestiae nisi! Maxime modi porro consectetur deleniti qui, quisquam
          praesentium harum minus quis ad architecto doloribus magni velit
          asperiores molestias delectus?
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
