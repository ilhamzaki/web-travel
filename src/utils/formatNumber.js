/* eslint-disable import/no-anonymous-default-export */
export default (number) => {
  const formatNumber = new Intl.NumberFormat("id-ID");
  return formatNumber.format(number);
};
