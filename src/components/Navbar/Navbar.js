import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoBag } from "react-icons/io5";
import "./Navbar.css";

export const Navbar = () => {
  const { quantity } = useSelector((state) => state.cart);
  const { pathname } = useLocation();

  return (
    <>
      {(pathname !== "/*" && pathname !== "/products/:id") && (
        <div className="Navbar">
          <div className="container">
            <Link to="/">Products</Link>
            <Link to="/cart" className="cart">
              <IoBag />
              {quantity !== 0 && <span>{quantity}</span>}
            </Link>
          </div>
        </div>
      )};
    </>
  );
};


