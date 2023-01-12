import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../redux/store";
import { shoppingCartListType } from "../../types/shoppingCartListType";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function Header(props: { withContent: boolean }) {

  const clientShoppingCart: shoppingCartListType[] = useAppSelector((state: RootState) => state.clientShoppingCart.value);

  const [shoppingCartOpen, setShoppingCartOpen] = useState<boolean>(false);
  const [menuMobile, setMenuMobile] = useState<boolean>(false);
  const [countElementsShoppingCart, setCountElementsShoppingCart] = useState<number>(0)

  const getCountValuesElementsShoppingCart = () => {
    let count = 0;

    for (let i = 0; i < clientShoppingCart.length; i++) {
      count += clientShoppingCart[i].count
    }

    setCountElementsShoppingCart(count)
  }

  useEffect((): void => {
    if (clientShoppingCart.length > 0) {
      getCountValuesElementsShoppingCart()
    }
  }, [clientShoppingCart])

  return (
    <>
      <ShoppingCart open={shoppingCartOpen} closeShoppingCart={() => {setShoppingCartOpen(false)}}/>
      <header className="header">
        <div className="header__bar">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            <div className="bar__logoname">FOODY</div>
          </NavLink>
          <nav className="bar__menu">
            <div className={menuMobile ? "menu-links menu-links-mobile-open" : "menu-links"}>
              <NavLink to="/randomfoody" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="menu__element menu__element--random-foody">
                  <span className="material-symbols-outlined">restaurant_menu</span>
                  RandomFOODY
                </div>
              </NavLink>

              <NavLink end to="/offer" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="menu__element">Oferta</div>
              </NavLink>
              <NavLink to="/about-us" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="menu__element">O nas</div>
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="menu__element">Kontakt</div>
              </NavLink>
              <NavLink to="/help" className={({ isActive }) => (isActive ? "active-link" : "")}>
                <div className="menu__element">Pomoc</div>
              </NavLink>
            </div>
            <div className="menu-settings">
              <div className="menu__element menu__element--shopping-cart" onClick={() => {setShoppingCartOpen(true)}}>
                <span className="material-symbols-outlined">
                  shopping_cart
                  <div className="menu__element--shopping-cart-count">
                    {countElementsShoppingCart}
                  </div>
                </span>
                <div className="menu__element__text">Koszyk</div>
              </div>
              <div className="menu__element menu__element--mobile-menu" onClick={() => {setMenuMobile(!menuMobile)}}>
                <span className="material-symbols-outlined">menu</span>
              </div>
            </div>
          </nav>
        </div>
        {props.withContent ? (
          <div className="header__content">
            <div className="header__content__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className="header__content__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              consectetur minus, harum culpa, minima quibusdam nisi possimus
              reprehenderit tempora sit dolorum iste accusantium hic. Dolor?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
              velit amet totam laudantium vitae ipsum dignissimos dolore,
              doloremque ut saepe ab reprehenderit excepturi inventore ex?
            </div>
          </div>
        ) : null}
      </header>
    </>
  );
}

export default Header;
