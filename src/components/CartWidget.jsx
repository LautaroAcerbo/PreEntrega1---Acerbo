import cart from "../assets/carrito 2.webp";

export const CartWidget = () => {
  return (
    <>
      <img src={cart} alt="carrito" width={35} />
      <span>45</span>
    </>
  );
};
