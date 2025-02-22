import { MutationTree } from "vuex";

const mutations: MutationTree<CustomersStoreState> = {
  getCustomersSuccess(state, payload: { customers: Customer[] }) {
    state.customers = payload.customers;
  },

  addNewCustomerSuccess(state, payload: { customer: Customer }) {
    state.customers = [...state.customers, payload.customer];
  },

  deleteCustomerSuccess(state, payload) {
    state.customers = state.customers.filter((i) => i.id !== payload);
  },
};

export default mutations;
