import React from "react";
import { useAppDispatch } from "../../../hooks/hooks";
import { SEND_CONTACT_MESSAGE, SET_CONTACT_MESSAGE_VALUE, RESET_CONTACT_MESSAGE_VALUES } from "../../../redux/slices/contactPageSlice";
import { AppDispatch } from "../../../redux/store";

function ContactForm() {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <>
      <section className="main__form__header">
        <div className="header__title">Kontakt</div>
        <div className="header__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas neque
          voluptate obcaecati, est iste totam vitae, dolores accusantium nisi
          soluta eum aut fugit aliquid quisquam eveniet natus laudantium minima
          eos. Omnis consectetur earum ut molestias explicabo fugit veniam ipsa
          necessitatibus optio deserunt similique corrupti cupiditate porro
          illum praesentium, vel dolore inventore soluta quidem, reiciendis
          culpa ex. Possimus optio cupiditate id provident placeat pariatur
          tempora eaque, quo autem aspernatur iure fugiat at, expedita itaque!
          Recusandae, tenetur accusantium culpa iusto accusamus eius?
        </div>
      </section>
      <form
        className="main__form"
        onSubmit={() => {
          dispatch(SEND_CONTACT_MESSAGE());
        }}
      >
        <label className="form-label">
          Imię*
          <input
            className="form-input"
            type="text"
            required
            onChange={(e) => {
              dispatch(
                SET_CONTACT_MESSAGE_VALUE({
                  type: "client-name",
                  value: e.target.value,
                })
              );
            }}
          />
        </label>
        <label className="form-label">
          Rodzaj wiadomości*
          <select
            className="form-select"
            required
            onChange={(e) => {
              dispatch(
                SET_CONTACT_MESSAGE_VALUE({
                  type: "message-type",
                  value: e.target.value,
                })
              );
            }}
          >
            <option value=""></option>
            <option value="Zapytanie o produkt">Zapytanie o produkt</option>
            <option value="Zapytanie o dostawę">Zapytanie o dostawę</option>
            <option value="Zapytanie o płatność">Zapytanie o płatność</option>
            <option value="Zapytanie o zamówienie">
              Zapytanie o zamówienie
            </option>
            <option value="Reklamacja/Zwrot">Reklamacja/Zwrot</option>
            <option value="Inne">Inne</option>
          </select>
        </label>
        <label className="form-label">
          Numer zamówienia (opcjonalnie)
          <input
            className="form-input"
            type="text"
            onChange={(e) => {
              dispatch(
                SET_CONTACT_MESSAGE_VALUE({
                  type: "order-number",
                  value: e.target.value,
                })
              );
            }}
          />
        </label>
        <label className="form-label">
          Treść wiadomości*
          <textarea
            className="form-textarea"
            required
            onChange={(e) => {
              dispatch(
                SET_CONTACT_MESSAGE_VALUE({
                  type: "message-text",
                  value: e.target.value,
                })
              );
            }}
          />
        </label>
        <div className="main__form__buttons-group">
          <input
            className="form-input-button"
            type="reset"
            value="Wyczyść formularz"
            onClick={() => dispatch(RESET_CONTACT_MESSAGE_VALUES())}
          />
          <input className="form-input-button" type="submit" value="Wyślij" />
        </div>
      </form>
    </>
  );
}

export default ContactForm;
