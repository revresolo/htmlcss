function topProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
    const maxProfit = Math.max(...productProfitArray.values());
    return Object.keys(productProfitArray).find(
      (product) => productProfitArray[product] === maxProfit
    );
  }
  function bottomProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
    const minProfit = Math.min(...productProfitArray.values());
    return Object.keys(productProfitArray).find(
      (product) => productProfitArray[product] === minProfit
    );
  }
  function zeroProfitProduct(productProfitArray) {
    if (productProfitArray.length === 0) {
      return "No Data";
    }
    const zeroProfit = 0;
    const zeroProfitProducts = [];
    for (const product in productProfitArray) {
      if (Math.abs(productProfitArray[product]) <= zeroProfit) {
        zeroProfitProducts.push(product);
      }
    }
    if (zeroProfitProducts.length === 0) {
      return "No Data";
    }
    return zeroProfitProducts[0];
  }