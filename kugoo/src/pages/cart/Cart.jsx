// import React from "react";
// import Searchpage from "../Homepage/Searchpage";


// function Cart ({items, removeFromCards}) {
//     const total = items.reduce((acc,value)=>(acc+value.price) * value.quantity, 0)
//     return (
//         <div>
//           <h2>Корзина</h2>
//           {cartItems.length === 0 ? (
//             <p>Корзина пуста</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.id}>
//                 <p>
//                   {item.name} - {item.price}₸ x {item.quantity}
//                 </p>
//                 <input
//                   type="number"
//                   value={item.quantity}
//                   min="1"
//                   onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
//                 />
//                 <button onClick={() => removeFromCart(item.id)}>Удалить</button>
//               </div>
//             ))
//           )}
//           <h3>Итого: {total}₸</h3>
//         </div>
//     );
// };

// export default Cart;