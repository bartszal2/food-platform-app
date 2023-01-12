import React, { useEffect } from "react";
import Footer from "../../layouts/Footer/Footer";
import Header from "../../layouts/Header/Header";
import ContactForm from "./components/ContactForm";
import ContactMessage from "./components/ContactMessage";
import "../../scss/pages/ContactPage/ContactPage.css";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RESET_CONTACT_MESSAGE_VALUES } from "../../redux/slices/contactPageSlice";
import { contactPageSliceType } from "../../types/slices/contactPageSliceType";
import { AppDispatch, RootState } from "../../redux/store";

function ContactPage() {
  const contactFormValues: contactPageSliceType = useAppSelector((state: RootState) => state.contactPage.value);
  const dispatch: AppDispatch = useAppDispatch();

  useEffect((): void => {
    dispatch(RESET_CONTACT_MESSAGE_VALUES());
  }, []);

  return (
    <div className="contact-container">
      <Header withContent={false} />
      <main className="main">
        {contactFormValues.sendMessage ? <ContactMessage /> : <ContactForm />}
      </main>
      <Footer />
    </div>
  );
}

export default ContactPage;
