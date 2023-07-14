export const makeRetinaSrc = (url) => {
  const url2x = url.replace(/(\.\w+$)/, "@2x$1");
  const url3x = url.replace(/(\.\w+$)/, "@3x$1");

  return {src: url, srcSet: `${url}, ${url2x} 2x, ${url3x} 3x`, loading: "lazy"};
};

export const applyProductFilter = (list, filter) => {
  return list.filter(item => {
    const itemPrice = item.discont_price || item.price;

    if (itemPrice < filter.priceMin) {
      return false;
    } else if (itemPrice > filter.priceMax) {
      return false;
    } else if (filter.onlySales && item.discont_price !== null) {
      return false;
    }

    return true;
  }).sort((a, b) => {

    if (filter.sortBy === "by default") {
      return 0;
    } else if (filter.sortBy === "price up") {
      const itemPriceA = a.discont_price || a.price;
      const itemPriceB = b.discont_price || b.price;
      return itemPriceA - itemPriceB;
    } else if (filter.sortBy === "price down") {
      const itemPriceA = a.discont_price || a.price;
      const itemPriceB = b.discont_price || b.price;
      return itemPriceB - itemPriceA;
    } else if (filter.sortBy === "name up") {
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    } else if (filter.sortBy === "name down") {
      if(a.title < b.title) { return 1; }
      if(a.title > b.title) { return -1; }
      return 0;
    }
  });
};
