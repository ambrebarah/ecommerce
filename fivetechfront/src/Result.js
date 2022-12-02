import "../src/css/Result.css";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEuro } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";

const categories = [
  "62ebb05fd66dd376e9ec962e",
  "62ebb091d66dd376e9ec962f",
  "62ebb0a6d66dd376e9ec9630",
  "62ebb0b9d66dd376e9ec9631",
  "62ebb0d0d66dd376e9ec9632",
  "62ebb0e3d66dd376e9ec9633",
  "62ebb0f3d66dd376e9ec9634",
  "62ebb0fdd66dd376e9ec9635",
  "62ee9f83041ca2ec8753dee7"
];

const Result = () => {
  const [result, setResult] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const [resultNbr, setResultNbr] = useState(false);
  const { keyword } = useParams();
  const tmp = keyword === "all" ? "" : keyword;
  let body = {
    keyword: tmp,
  };
  const selectCategory = useRef();
 
  const { addItem } = useCart();
  const addingItem = (obj) => {
    setItemAdded(false);
    addItem(obj);
    setItemAdded(true);
  };

  async function getData() {

    await fetch("http://localhost:3000/api/product/search", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(async (response) => {
        // navigate('/Profile/');
        return await response.json();
      })
      .then((response) => {
        // setter(response);
        const res = response;
        const resLength = Object.keys(res).length;
        setResult(res);
        setResultNbr(resLength);

        console.log(response);
        // console.log(result);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (categories.includes(keyword)) {
      body = {
        keyword: '',
        category: keyword
      };
      // console.log(selectCategory.current.value)
      selectCategory.current.value = keyword;
    }
    getData();
  }, [keyword]);
  console.log(result)

  library.add(faEuro);

  // const [filterForm, setFilterForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.category.value !== '') {
      body = {
        keyword: e.target.keyword.value,
        priceMax: e.target.priceMax.value,
        category: e.target.category.value
      }
      // console.log(body)
    } else {
      body = {
        keyword: e.target.keyword.value,
        priceMax: e.target.priceMax.value
      }
    }
    getData();
    // console.log(body);
  };

  return (
    <>
      <Header />
      <div className="Container">
        <div className="search">
          <form onSubmit={(e) => handleSubmit(e)} className="searchContainer">
            <div className="sidesearch">
              <h3 id="titlefiltre">FILTRER LES PRODUITS :</h3>
              <h4 id="nbProducts">{resultNbr}</h4>&nbsp;
              <h4>{resultNbr <= 1 ? 'résultat' : 'résultats'}</h4>&nbsp;
            </div>
            <div className="inputSearch">
              <h4>Chercher une référence</h4>
              <input name="keyword" type="text" placeholder="Désignation , modèle..." />
              <button id="ok" type="submit">
                OK
              </button>
            </div>
            <div className="marques">
              <h4>Catégories</h4>
              <div className="checkbox">
                <select ref={selectCategory} name="category" id="select-category">
                  <option value=''>---</option>
                  <option value="62ebb05fd66dd376e9ec962e">Carte graphique</option>
                  <option value="62ebb091d66dd376e9ec962f">SSD</option>
                  <option value="62ebb0a6d66dd376e9ec9630">Carte mère</option>
                  <option value="62ebb0b9d66dd376e9ec9631">Claviers</option>
                  <option value="62ebb0d0d66dd376e9ec9632">Mémoire vive</option>
                  <option value="62ebb0e3d66dd376e9ec9633">Disque dur</option>
                  <option value="62ebb0f3d66dd376e9ec9634">Souris</option>
                  <option value="62ebb0fdd66dd376e9ec9635">Moniteur LCD</option>
                  <option value="62ee9f83041ca2ec8753dee7">Laptop</option>
                </select>
              </div>

              <div className="prix">
                <div className="titlePrice">
                  <h4>Prix max</h4>
                  <h6>(euros)</h6>
                </div>
                <div className="nbPrix">
                  <input name="priceMax" type="number" />
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="resultContainer">
          {itemAdded && <h3>Produit ajouté au panier !</h3>}
          {result && Object.values(result).map((product) => (
            <div key={product._id} className="resultBox">
              <img id="article" src={product.imageUrl} alt={product.name + " image"} />
              <div className="description">
                <h3 id="productsName">{product.name}</h3>
                <h4 id="descrip1">{product.description}</h4>
                {/* <h5 id="descrip2"></h5> */}
              </div>
              <div className="price">
                <p id="prix1">{product.price}</p>
                <FontAwesomeIcon id="euros" icon="fa-euro-sign" />
              </div>
              <div className="resultbuttons">
                <p id="stock">{product.quantity > 0 ? "En stock" : "Produit épuisé"}</p>
                <button id="buy" onClick={() => addingItem({ id: product._id, ...product })} >Ajouter au panier</button>
              </div>
            </div>
          ))}

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Result;
