let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

calculatePrice(order);

function calculatePrice(order) {
  console.log('QTY    ITEM                TOTAL')
  const total = order.reduce((acc, { itemName, quantity, unitPrice }) => {
    const totalPrice = quantity * unitPrice;
    const formattedItemName = itemName.padEnd(16, " ");
    console.log(`${quantity}      ${formattedItemName}     ${totalPrice.toFixed(2)}£`);
    return acc + totalPrice;
  }, 0);
  console.log("");
  console.log(`Total: ${total.toFixed(2)}£`);
}
