export function currencyFormat(num) {
  return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};
