export const orders = Object.freeze({
  ASC: "asc",
  DESC: "desc"
});
export const availableOrders = Object.freeze(Object.values(orders));

export const componentArgs = {
  className: { table: { disable: true } },
  order: {
    control: {
      type: "select"
    },
    options: availableOrders
  }
};
