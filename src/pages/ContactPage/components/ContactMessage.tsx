import React, { useEffect } from "react";
import { useAppSelector } from "../../../hooks/hooks";
import { RootState } from "../../../redux/store";
import { contactPageSliceType } from "../../../types/slices/contactPageSliceType";
import { scrollWindowToTop } from "../../../utils/scrollWindowToTop";

function ContactMessage() {
  const contactFormValues: contactPageSliceType = useAppSelector((state: RootState) => state.contactPage.value);

  useEffect((): void => {
    scrollWindowToTop();
  }, []);

  return (
    <>
      <section className="main__message-block">
        <div className="message-block">
          <div className="message-block__header">
            <div className="header__icon">
              <span className="material-symbols-outlined">done</span>
            </div>
            <div className="header__title">
              Twoja wiadomośc została wysłana!
            </div>
          </div>
          <div className="message-block__main">
            <div className="main__elements-group">
              <div className="main__element">
                <div className="element__client-name">Imię: </div>
                <div className="element__content">
                  {contactFormValues.clientName}
                </div>
              </div>
              <div className="main__element">
                <div className="element__message-type">Rodzaj wiadomości:</div>
                <div className="element__content">
                  {contactFormValues.typeOfMessage}
                </div>
              </div>
              {contactFormValues.orderNumber.length > 0 ? (
                <div className="main__element">
                  <div className="element__order-number">Numer zamówienia:</div>
                  <div className="element__content">
                    {contactFormValues.orderNumber}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="main__element">
              <div className="element__message-text">Treść wiadomości:</div>
              <div className="element__content">
                {contactFormValues.textMessage}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactMessage;
