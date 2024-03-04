function calculate() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var price = parseFloat(document.getElementById("price").value);
    var tax = parseFloat(document.getElementById("tax").value);
    var discount = parseFloat(document.getElementById("discount").value);
    var shipping = parseFloat(document.getElementById("shipping").value);
    // Apply discount if quantity is greater than 100
    if (quantity > 100) {
        discount *= 2;
    }

    // Calculate subtotal
    var subtotal = quantity * price;

    // Apply discount
    subtotal -= discount;

    // Calculate total with tax
    var totalWithTax = subtotal * (1 + tax / 100);

    // Add shipping cost
    var total = totalWithTax + shipping;

    // Update total value in the form
    document.getElementById("total").value = total.toFixed(2);
}