import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { platformCategories } from "../../../data/platformCategories";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { getPlatformData, getProductsCategoriesData } from "../../../redux/slices/platformDataSlice";
import { AppDispatch, RootState } from "../../../redux/store";
import { dataType, platformDataSliceType } from "../../../types/slices/platformDataSliceTypes";

function SectionMain() {
  const [searchOfferValue, setSearchOfferValue] = useState<string>("");

  const dispatch: AppDispatch = useAppDispatch();
  const platformData: platformDataSliceType = useAppSelector((state: RootState) => state.platformData);

  const platformOfferData: dataType = platformData.platformOfferData;
  const platformCategoriesData: dataType = platformData.platformCategoriesData;

  const offerDayProductsData = (platformData: any) => {
    let data = [];

    const searchValuesInProductTags = (product: any, value: string) => {
        const productTags = product.productTag;

        for (let i = 0; i < productTags.length; i++) {
            return productTags[i] == value ? true : false;
        }
    }

    for (let i = 0; i < platformData.length; i++) {
        const isValueInProductTags = searchValuesInProductTags(platformData[i], 'Oferta dnia')

        isValueInProductTags ? data.push(platformData[i]) : null;
    }

    const result = dataWithFiveFirstElements(data);

    return result;
}

const dataWithFiveFirstElements = (data: any) => {
    const result = [];

    for (let i = 0; i < 5; i++) {
        result.push(data[i])
    }

    return result;
}

const getProductCards = (data: any) => {
    const result = data.map((e:any, index:number) => {
        if (index == 0) {
            return (
                <ProductCard
                  key={e.id}
                  largeSize={true}
                  productId={e.id}
                  productName={e.productName}
                  productShortDescription={e.shortProductDescription}
                  productLongDescription={e.longProductDescription}
                  productTag={e.productTag}
                  productPrice={e.price}
                  productPrevPrice={e.prevPrice}
                  productImage={e.productImage}
                  productAvailable={e.productAvailable}
                />
            )
          } else {
            return (
                <ProductCard
                  key={e.id}
                  largeSize={false}
                  productId={e.id}
                  productName={e.productName}
                  productShortDescription={e.shortProductDescription}
                  productLongDescription={e.longProductDescription}
                  productTag={e.productTag}
                  productPrice={e.price}
                  productPrevPrice={e.prevPrice}
                  productImage={e.productImage}
                  productAvailable={e.productAvailable}
                />
            );
          }
        })
    return result
}

  let resultProductsCard;
  let resultCategoryButtons;

  if (platformOfferData.error != null) {
    resultProductsCard = "Błąd ładowania danych";
  } else {
    if (platformOfferData.value.length > 0) {
      const dayOfferProducts = offerDayProductsData(platformOfferData.value);

      resultProductsCard = getProductCards(dayOfferProducts);
    } else {
      resultProductsCard = "Brak danych do wyświetlenia";
    }
  }

  if (platformCategoriesData.error != null) {
    resultCategoryButtons = "Błąd ładowania danych";
  } else {
    if (platformCategoriesData.value.length > 0) {
      const categoryButtons = () => {
        return platformCategories.map((e) => (
          <Link
            key={e.categoryName}
            to={`/offer/category/${e.categoryName
              .toLocaleLowerCase()
              .replaceAll(" ", "")}`}
          >
            <div className="search__product__category">{e.categoryName}</div>
          </Link>
        ));
      };

      resultCategoryButtons = categoryButtons();
    } else {
      resultCategoryButtons = "Brak danych do wyświetlenia";
    }
  }

  useEffect((): void => {
    dispatch(getPlatformData());
    dispatch(getProductsCategoriesData());
  }, []);
  

  return (
    <section className="section">
      <div className="section__header">
        <div className="section__title">Coś dobrego na dziś?</div>
        <div className="section__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          illum voluptatibus odit doloremque non, quia soluta facere doloribus
          voluptates ullam animi quaerat delectus atque eligendi nisi earum
          similique enim necessitatibus iste! Tempore tenetur quibusdam
          laudantium dolores distinctio voluptate consequuntur possimus
          praesentium molestias mollitia suscipit.
        </div>
      </div>
      <div
        className={
          platformOfferData.loading ||
          platformOfferData.error != null ||
          platformOfferData.value.length == 0
            ? "section__products__container center-item"
            : "section__products__container"
        }
      >
        {platformOfferData.loading ? <LoadingSpinner /> : resultProductsCard}
      </div>
      <div className="section__search">
        <div className="section__search__form">
          <div className="section__search__form__header">
            <div className="search__form__title">
              Szukaj tego co lubisz najbardziej!
            </div>
            <div className="search__form__text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              aspernatur nostrum cum modi aut veniam est enim porro, accusantium
              adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Totam sint labore recusandae eaque dolores autem.
            </div>
          </div>
          <div className="section__search__form__main">
            <input
              type="text"
              placeholder="Szukaj..."
              onChange={(e) => {
                setSearchOfferValue(e.target.value);
              }}
            />
            <div>
              <Link
                to={
                  searchOfferValue == ""
                    ? "/offer"
                    : `/offer/${searchOfferValue
                        .toLocaleLowerCase()
                        .replaceAll(" ", "_")}`
                }
              >
                <input type="button" value="Szukaj" />
              </Link>
              <div className="search__form__element">lub</div>
              <Link to="/offer">
                <button>Sprawdź ofertę</button>
              </Link>
            </div>
          </div>
        </div>
        <div
          className={
            platformCategoriesData.loading ||
            platformCategoriesData.error != null ||
            platformCategoriesData.value.length == 0
              ? "section__search__product__categories center-item"
              : "section__search__product__categories"
          }
        >
          {platformCategoriesData.loading ? (
            <LoadingSpinner />
          ) : (
            resultCategoryButtons
          )}
        </div>
      </div>
    </section>
  );
}

export default SectionMain;
