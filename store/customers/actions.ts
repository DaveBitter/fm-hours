import { ActionTree } from "vuex";

const actions: ActionTree<CustomersStoreState, RootStoreState> = {
  async getCustomers({ commit }) {
    const customers = await this.app.$customersService.getCustomers();
    commit("getCustomersSuccess", { customers });
  },

  async addNewCustomer({ commit }, payload: Omit<Customer, "id">) {
    const newCustomer = await this.app.$customersService.addCustomer(payload);
    commit("addNewCustomerSuccess", { customer: newCustomer });
  },

  async deleteCustomer({ commit }, payload) {
    await this.app.$customersService.deleteCustomer(payload);
    commit("deleteCustomerSuccess", payload);
  },
};

export default actions;
