function canonPriceChecker() {
  fillListOfProducts(LIST_OF_NAMES, LIST_OF_URLS, LIST_OF_PRICES);
  populateListOfProducts(LIST_OF_NAMES, LIST_OF_URLS, LIST_OF_PRICES, LIST_OF_PRODUCTS);
  writetoSheet(LIST_OF_PRODUCTS);
  
}
