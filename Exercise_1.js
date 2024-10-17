// Problem level: Beginners

// Create a simple program that calculates the total cost of an order based on the following:

// A customer orders multiple products. For each product, we need to track:
// Product name (String)
// Quantity (Number)
// Price per unit (Number)
// The program should:

// Take details of three different products.
// Calculate the subtotal (quantity * price) for each product.
// Calculate the total cost of the order (sum of all subtotals).
// Add a 10% sales tax to the total cost.
// Output each product's details and the subtotal to the console.
// Output the total cost before tax, the sales tax, and the final total after tax.


// Step 1: Declare variables for each product's details
let product1Name = "Laptop";
let product1Quantity = 2;
let product1Price = 800;  // Price per unit

let product2Name = "Headphones";
let product2Quantity = 3;
let product2Price = 50;   // Price per unit

let product3Name = "Mouse";
let product3Quantity = 1;
let product3Price = 20;   // Price per unit

// Step 2: Calculate subtotal for each product (quantity * price)
let product1Subtotal = product1Quantity * product1Price;
let product2Subtotal = product2Quantity * product2Price;
let product3Subtotal = product3Quantity * product3Price;

// Step 3: Calculate the total cost before tax
let totalCostBeforeTax = product1Subtotal + product2Subtotal + product3Subtotal;

// Step 4: Calculate the sales tax (10% of the total cost before tax)
let salesTax = totalCostBeforeTax * 0.10;

// Step 5: Calculate the final total cost (total cost before tax + sales tax)
let totalCostAfterTax = totalCostBeforeTax + salesTax;

// Step 6: Output each product's details and subtotal to the console
console.log(`Product 1: ${product1Name}, Quantity: ${product1Quantity}, Subtotal: $${product1Subtotal}`);
console.log(`Product 2: ${product2Name}, Quantity: ${product2Quantity}, Subtotal: $${product2Subtotal}`);
console.log(`Product 3: ${product3Name}, Quantity: ${product3Quantity}, Subtotal: $${product3Subtotal}`);

// Output the total cost before tax, sales tax, and final total cost to the console
console.log(`Total cost before tax: $${totalCostBeforeTax}`);
console.log(`Sales tax (10%): $${salesTax}`);
console.log(`Total cost after tax: $${totalCostAfterTax}`);
