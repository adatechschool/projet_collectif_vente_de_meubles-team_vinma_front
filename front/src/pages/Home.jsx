// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from "react";

//import components
import Header from "../components/Header";
import Banner from "../components/Banner";
import Filters from "../components/Filters";

const Home = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart];
    const productExist = newCart.find((elem) => elem.id === product.id);

    if (productExist) {
      console.log("le produit est deja dans la panier");
    } else {
      newCart.push(product);
    }
    setCart(newCart);
    saveCart(newCart);
  };

  const removeFromCart = (product) => {
    const newCart = [...cart];
    const productInTab = newCart.find((elem) => elem.id === product.id);
    const index = newCart.indexOf(productInTab);
    newCart.splice(index, 1);
    setCart(newCart);
    saveCart(newCart);
  };

  const saveCart = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);



  const productsFilters = [
    {
      title: "Bed",
      image:
        "https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/lit-vintage-140x190-avec-sommier-a-lattes-1000-11-21-160372_1.jpg",
      alt: "Bed filter",
    },
    {
      title: "Cabinet",
      image:
        "https://cdn.laredoute.com/products/0/0/9/0093e7dd5f1b25cd1fb79dde54a7ca4f.jpg?width=900&dpr=1",
      alt: "Cabinet filter",
    },
    {
      title: "Sofa",
      image:
        "https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/canape-clic-clac-3-places-en-velours-vert-1000-16-15-198168_1.jpg",
      alt: "Sofa filter",
    },
    {
      title: "Chair",
      image:
        "https://medias.maisonsdumonde.com/image/upload/q_auto,f_auto/w_2000/img/chaise-vintage-en-velours-vieux-rose-et-metal-imitation-chene-1000-4-30-210073_1.jpg",
      alt: "Chair filter",
    },
    {
      title: "Table",
      image:
        "https://cdn.laredoute.com/products/1/8/5/185539d0b362ea30b16462b30d8f1e20.jpg?width=700&dpr=1",
      alt: "Table filter",
    },
    {
      title: "Others",
      image:
        "https://cdn.laredoute.com/products/c/4/0/c400ea36ee52792fc307da3f3eaee21c.jpg?width=800&dpr=1",
      alt: "Others filter",
    },
  ];

  return (
    <>
      <Header cart={cart} setCart={setCart} removeFromCart={removeFromCart} />

      <div className="scrollBar flex flex-nowrap mt-5 px-5 h-[145px] overflow-hidden overflow-x-scroll ">
        <div className="flex justify-between sm:w-screen">
          {productsFilters.map((filter) => {
            return (
              <div className="flex flex-col items-center mr-5 last:mr-0 w-28 h-28">
                <img
                  className="rounded-full border-[1px] p-2 object-cover"
                  src={filter.image}
                  alt={filter.alt}
                />
                <span className="text-sm mt-2">{filter.title}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Banner />
      {/* <Filters /> */}
      <h1 className="mt-20 ml-5 text-3xl font-bold">Vous allez adorer</h1>
      <div className="global-container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
        <div className="border-[1px] rounded-lg m-5 p-5 ">
          <img
            className="w-full max-h-[280px] object-cover rounded-lg mb-5"
            src="https://cdn1.bobochicparis.com/191749-thickbox_default/canape-droit-fixe-3-places-cloud-avec-pouf.jpg"
            alt="img"
          />
          <div className="flex justify-between items-end sm:flex-col sm:items-start">
            <h2 className="text-lg">Title product</h2>
            <h2 className="text-3xl font-bold">22.50 €</h2>
          </div>
          <button
            type="submit"
            className="rounded-lg mt-5 py-4 px-14 w-full bg-amber-400 hover:bg-black duration-300 rounded-md text-white text-sm hover:transition hover:duration-300 hover:ease-in-out"
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;

{
  /* <>
      <div className="bg-beige h-screen">
        <Header cart={cart} setCart={setCart} removeFromCart={removeFromCart} />
        <div className="product flex flex-row m-5">
          {products.map((product, index) => {
            return (
              <div
                className="bg-white p-5 m-2"
                onClick={() => {
                  addToCart(product);
                }}
                key={product.id}
              >
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <img className="h-20" src={product.picture.Meuble01} alt="" />,
                <p>{product.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </> */
}
