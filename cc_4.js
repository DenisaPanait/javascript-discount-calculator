const products = [
    { name: 'notebook', category: 'stationary', price: 3.99, inventory: 30},
    { name: 'T-shirt',  category: 'apparel', price: 19.99, inventory: 10 },
    { name: 'Detergent', category: 'household', price: 25.99, inventory: 15},
    { name: 'Chips', category: 'groceries', price: 4.99, inventory: 40},
    { name: 'Type-C Charger', category: 'electronics', price: 9.99, inventory: 35}

];let discountRate = 0;
switch (products.category) {
    case 'electronics': 
    discountRate = 0.20;
    break;
    case 'apparel': 
    discountRate: 0.15;
    break;
    case 'groceries':
    case 'household':
    discountRate = 0.10;
    break;
    default: 
   discountRate = 0; // stationary have no discounts
}
products.discountedRate= +(products.price*(1- products.discoutedRate)).toFixed(2);
function extraDiscount(customerType){
    if (customerType==='student') return 0.05;
    else if (customerType ==='senior') return 0.07;
    else return 0;
}
const customerType = ['regular', 'student', 'senior'];
const orders = [ 
    [4,2], 
    [1,1,0]
    [3,3,2] 
];
for (let i = 0; i < 3; i++) 

  for (const idx of orders[i]) {
    const item = products[idx];
    if (item.inventory > 0) {
      subtotal += item.discountedPrice;
      item.inventory--;
    }
  }
const total = +(subtotal * (1- extraDiscount(customerType)).toFixed(2));
  console.log(`Customer ${i + 1} (${customerType[i]}): $${total}`);
  console.log("\nSingle Product Details:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}
console.log("\nAll Products After Inventory Update:");

for (const p of products) 
    {
  console.log(`\n${p.name}`);
  for (const [key, value] of Object.entries(p)) {
    console.log(`${key}: ${value}`);
  }
}