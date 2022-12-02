import { CartProvider, useCart } from "react-use-cart";
import Header from "./Header";
import Footer from "./Footer";
import "../src/css/Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

// import { useState, useEffect } from "react";

const Cart = () => {
  // const [cartItems, setCartItems] = useState([]);
  const { isEmpty, cartTotal, items, updateItemQuantity, removeItem } = useCart();

  console.log(items);
  // if (isEmpty)
  //     return <p>Votre panier est vide</p>

  // console.log(items)
  // useEffect(() => {
  //   async function getData() {
  //       items.map(async (item) => {
  //         await fetch("http://localhost:3000/api/product/" + item.id, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         method: "GET",
  //       })
  //         .then(async (response) => {
  //           // navigate('/Profile/');
  //           return await response.json();
  //         })
  //         .then((response) => {
  //           // setter(response);
  //           const res = response;
  //           setCartItems([...cartItems, res]);
  //           console.log(response);
  //           // console.log(result);
  //         })
  //         .catch((error) => console.log(error));
  //       });

  //   }
  //   getData();
  // }, [items]);

  library.add(faAngleLeft, faAngleRight);


  return (
    <div>
      <Header />
      {!isEmpty ? (
        <>
          <h2 id="page-title">Détail de votre panier</h2>
          <div className="result-page">
            <div className="results">
              {items.map((item) => (
                <div className="product-row" key={item._id}>
                  {/* {item.quantity} x {item.name} &mdash; */}
                  <div className="product-desc-div">
                    <img
                      className="product-image"
                      src={item.imageUrl}
                      alt={item.name + " image"}
                    />
                    <p className="product-name">{item.name}</p>
                  </div>
                  <div className="product-quantity-div">
                    <p className="product-quantity">{item.quantity}</p>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity - 1)
                      }
                    >
                     <FontAwesomeIcon icon="fa-solid fa-angle-left" />
                    </button>
                    <button
                      onClick={() =>
                        updateItemQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                    </button>
                  </div>
                  <div className="product-price-div">
                    <p className="product-price">{item.itemTotal}&euro;</p>
                  </div>
                  <div className="product-delete">
                    <button className="deletItem" onClick={() => removeItem(item.id)}>Supprimer</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="total">
              <div className="total-top">
                <div id="totalAll">
                  <h2>Total:</h2>
                  <h2 id="total-amount">{cartTotal}&euro;</h2>
                </div>

                <p>Hors frais de livraison</p>
              </div>
              <div className="total-bottom">
                <button id="place-order">PASSER COMMANDE</button>
                <p>
                  TVA appliquée sur la base du
                  <br />
                  pays: France (métropolitaine)
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <h2 id="empty-cart">Votre panier est vide</h2>
          <img id="empty-cart-image" src="/empty_cart.png" alt="empty cart" />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
