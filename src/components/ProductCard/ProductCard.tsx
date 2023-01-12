import React from "react";
import { Link } from "react-router-dom";
import { platformOfferData } from "../../data/platformOfferData";
import { useAppDispatch } from "../../hooks/hooks";
import { OPEN_MODAL_WINDOW } from "../../redux/slices/modalOrderingWindowSlice";
import { AppDispatch } from "../../redux/store";

function ProductCard(props: {
  largeSize: boolean;
  productId: number;
  productName: string;
  productShortDescription: string;
  productLongDescription: string;
  productTag: any;
  productPrice: number;
  productPrevPrice: number;
  productImage: string;
  productAvailable: boolean;
}) {
  const offerPlatformData = platformOfferData;
  const dispatch: AppDispatch = useAppDispatch();

  const productElement = offerPlatformData.filter((e: { id: string | number }) => e.id == props.productId)[0];

  return (
    <div
      key={props.productId}
      className={
        props.largeSize
          ? "product__card product__card__large-size"
          : "product__card"
      }
    >
      <Link to={`/product/${props.productId}`}>
        <div
          className={
            props.productAvailable
              ? "product__card__image"
              : "product__card__image--not-available"
          }
        >
          {props.productImage ? (
            <img src={require(`../../assets/images/${props.productImage}`)} />
          ) : (
            ""
          )}
        </div>
      </Link>
      <div className="product__card__header">
        <div className="product__card__categories">
          {props.productTag.length > 0
            ? props.productTag.map((e: any) => (
                <div key={e} className="product__category">
                  {e}
                </div>
              ))
            : ""}
        </div>
        <div className="product__card__settings">
          {props.productAvailable ? (
            <div
              className="product__add-to-shopping-cart"
              onClick={() => {
                dispatch(OPEN_MODAL_WINDOW(productElement));
              }}
            >
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
          ) : (
            <div className="product__add-to-shopping-cart product-not-available">
              <span className="material-symbols-outlined">shopping_cart</span>
            </div>
          )}
        </div>
      </div>
      <div className="product__card__main">
        <div className="product__card__prev-price">
          {props.productPrevPrice.toFixed(2)}zł
        </div>
        <div className="product__card__price">
          {props.productPrice.toFixed(2)}zł
        </div>
        <div className="product__card__title">{props.productName}</div>
        <div className="product__card__description">
          {props.largeSize
            ? props.productLongDescription
            : props.productShortDescription}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
