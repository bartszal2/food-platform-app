import React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { FILL_UP_FORM } from "../../../redux/slices/productsOrderingPageSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { shoppingCartListType } from "../../../types/shoppingCartListType";

function AgreementSection() {
  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);

  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="footer-blocks-container__block">
      <div className="block__title">Informacja</div>
      <div className="block__agreement">
        <label className="label-form">
          {clientShoppingCart.length > 0 ? (
            <input
              className="input-form"
              type="checkbox"
              required
              disabled={false}
              onChange={(e) => {
                dispatch(
                  FILL_UP_FORM({ value: e.target.value, name: "agreement" })
                );
              }}
            />
          ) : (
            <input
              className="input-form"
              type="checkbox"
              required
              disabled={true}
              checked={false}
            />
          )}
          Wyrażam zgodę na przetwarzanie danych osobowych
        </label>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
        delectus sunt perspiciatis tenetur, fugiat ducimus tempore et itaque,
        commodi exercitationem cum voluptatem! Doloremque quo eum ullam
        explicabo laboriosam exercitationem laudantium a quam provident sequi
        pariatur et, praesentium enim nihil nisi, labore neque veniam. Ipsa,
        labore.
      </div>
    </div>
  );
}

export default AgreementSection;
