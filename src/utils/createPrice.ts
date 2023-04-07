interface IPriceProps {
  minPrice: number;
  size: number;
}


export  function createPriceDependsOnSize({minPrice, size}: IPriceProps) {
  const minSize = 26;
  const ratio = minPrice / 100 * 3;

  if (size >= minSize) {
    return Math.ceil((size - minSize) * ratio + minPrice);
  } else return minPrice;
}