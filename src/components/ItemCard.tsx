import productImage from '../assets/moong-dal.jpg'

function ItemCard({name, price, imageUrl}) {
//   return (
//     <div id="item-card">
//         <p>Item Name</p>
//         <p>Price: Item Price</p>
//         <img src={productImage} />
//     </div>
//   );
  return (
    <div id="item-card">
        <p>{name}</p>
        <p>Price: {price}</p>
        <img src={imageUrl} />
    </div>
  );
}

export default ItemCard