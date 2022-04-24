import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import { BsBag } from "react-icons/bs";

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  if (cartTotal >= 35) {
    var Good = "Congratulations! We pay shipping!";
  } else {
    var shippingaway = Math.round(35 - cartTotal);
    var free = "You're only" + " $" + shippingaway + " from free shipping";
  }

  return (
    <header className=" sticky top-0 z-20 transparent text-white colornav">
      <div className="shipping text-center">
        <h1>FREE SHIPPING</h1>
      </div>
      <div className="flex flex-col items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
        <div className="flex">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <span className="text-4xl pt-1  font-bold">Oracle</span>
            </a>
          </Link>
          <a
            className="text-md font-bold cursor-pointer pl-12 absolute right-16"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <div className="relative mt-2">
              <BsBag size="1.5rem" />
              <div
                style={{ fontSize: "10px", left: "10px" }}
                className="absolute top-1 text-sm"
              >
                {cartQuantity}
              </div>
            </div>
          </a>
        </div>
        <div className="flex flex-row  pt-5 ">
          <div>
            <Link href="/info/about" passHref>
              <a className="cursor-pointer">
                <span className="text-lg pt-1 px-4  ">About</span>
              </a>
            </Link>
          </div>

          <div>
            <Link href="/info/contact" passHref>
              <a className="cursor-pointer ">
                <span className="text-lg pt-1 px-4 ">Contact</span>
              </a>
            </Link>
          </div>

          <MiniCart cart={cart} />
        </div>
      </div>
    </header>
  );
}
