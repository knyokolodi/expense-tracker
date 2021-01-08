export const contextReducer = (state, action) => {
  const { type, payload } = action;
  let transactions = [];
  switch (type) {
    case 'DELETE_TRANSACTON':
      transactions = state.filter((transaction) => transaction.id !== payload);
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    case 'ADD_TRANSACTON':
      transactions = [payload, ...state];
      localStorage.setItem('transactions', JSON.stringify(transactions));
      return transactions;
    default:
      return state;
  }
};
