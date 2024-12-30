import { useState } from "react";
import HeaderComp from "./HeaderComp";
import Data from "./utils/Constant";
import MobileCard from "./MobileCard";
import KhaliDabba from "./KhaliDabba";

function App() {
  const [dataArr, setDataArr] = useState(Data);
  const [cartCount, setCartCount] = useState(4);
  const [totalPrice, setTotalPrice] = useState(
    dataArr.reduce((acc, curr) => acc + curr.price, 0)
  );

  const clearCart = () => {
    setDataArr([]), setTotalPrice(0);
    setCartCount(0);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderComp mobCount={cartCount} />

      {dataArr.length === 0 ? (
        <KhaliDabba />
      ) : (
        <div className="flex flex-col w-[800px] gap-8 pt-10">
          {dataArr.map((ele, idx) => (
            <MobileCard
              key={idx}
              {...ele}
              index={idx}
              dataArr={dataArr}
              setDataArr={setDataArr}
              cartCount={cartCount}
              setCartCount={setCartCount}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
            />
          ))}
        </div>
      )}
      {dataArr.length === 0 ? (
        ""
      ) : (
        <h3 className="font-bold text-green-500 text-2xl pb-10">
          {" "}
          total price: $ {totalPrice}
        </h3>
      )}

      <div className="pb-8">
        <button
          className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-yellow-300 font-semibold"
          onClick={clearCart}
        >
          clear cart
        </button>
      </div>
    </div>
  );
}

export default App;
