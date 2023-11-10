// import React from "react";
// import "./Subtotal.css";
// import CurrencyFormat from "react-currency-format";

// function Subtotal() {
//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal (0 items): <strong>0</strong>
//             </p>
//             <small className="subtotal__gift">
//               <input type="checkbox" /> This Order Contains a Gift
//             </small>
//           </>
//         )}
//         decimalScale={2}
//         value={0}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />

//       <button>Proceed to Checkout</button>
//     </div>
//   );
// }

// export default Subtotal;

import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  // Calculate the total price of items in the basket
  const calculateTotal = () => {
    return basket.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This Order Contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={calculateTotal()} // Use the calculated total
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
