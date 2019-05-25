function fillListOfProducts(listOfNames, listOfUrls, listOfPrices) {
  var urlFetch = UrlFetchApp.fetch(URL_REPACKAGED);
  var urlContentText = urlFetch.getContentText();

  var regexProductName = REGEX_URL_AND_NAME_OF_PRODUCT.exec(urlContentText);
  
  var NameTemp = regexProductName[2];
  listOfNames.push(NameTemp);
  
  var UrlTemp = regexProductName[1];
  listOfUrls.push(UrlTemp);
  
  while (regexProductName != null) {
    regexProductName = REGEX_URL_AND_NAME_OF_PRODUCT.exec(urlContentText);
    
    if (regexProductName != null) {
      NameTemp = regexProductName[2];
      listOfNames.push(NameTemp);
      
      UrlTemp = regexProductName[1];
      listOfUrls.push(UrlTemp);
      
    }
    
  }
  
  var regexPrice = REGEX_PRICE.exec(urlContentText);
  
  var priceTemp = regexPrice;
  listOfPrices.push(priceTemp[1]);
  
  while (regexPrice != null) {
    regexPrice = REGEX_PRICE.exec(urlContentText);
      
    if (regexPrice != null) {
      priceTemp = regexPrice[1];
      listOfPrices.push(priceTemp);
    
    }
    
  }
    
}



function populateListOfProducts(listOfNames, listOfUrls, listOfPrices, listOfProducts) {
   
    for (var counter = 0; counter < listOfNames.length; counter++){
      var listOfProductTemp = [listOfNames[counter],  listOfPrices[counter], URL_PRODUCT_PATH + listOfUrls[counter]];
      listOfProducts.push(listOfProductTemp);
    }
  
}



function writetoSheet(listOfProducts) {
  var openSsById = SpreadsheetApp.openById(ID_SPREADSHEET);
  var openSheetByName = openSsById.getSheetByName(SHEET_NAME);
  var now = Date();
  
  var header = ['Time/Date', 'Product', 'Preço', 'URL'];
  openSheetByName.getRange(1, 1, 1, header.length).setValues([header]);

  var lastRow = openSheetByName.getLastRow() + 1;
  var numRows = listOfProducts.length;
  var totalColumns = listOfProducts[0].length;
  
  openSheetByName.getRange(lastRow, 1).setValue(now);
  openSheetByName.getRange(lastRow, 2, numRows, totalColumns).setValues(listOfProducts);
  openSheetByName.autoResizeColumns(1, 4);

}
