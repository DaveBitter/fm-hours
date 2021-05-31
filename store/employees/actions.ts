import { ActionTree } from "vuex";

const actions: ActionTree<EmployeesStoreState, RootStoreState> = {
  async getEmployees({ commit }) {
    const employees = await this.app.$employeesService.getEmployees();
    commit("setEmployees", { employees });
  },

  async saveProjects(
    { commit },
    payload: { employee: Employee; customerIds: string[] }
  ) {
    const newEmployee = { ...payload.employee, projects: payload.customerIds };
    await this.app.$employeesService.updateEmployee(newEmployee);

    commit("updateEmployee", { employee: newEmployee });
  },

  async addNewEmployee(
    { commit },
    payload: {
      name: string;
      email: string;
      travelAllowance: boolean;
      startDate: number;
    }
  ) {
    const defaultProjects = await this.app.$customersService.getCustomersAvailableToAll();

    let defaultProjectsIds = [];

    if (defaultProjects)
      defaultProjectsIds = defaultProjects.map((project) => project.id);

    const newEmployee = await this.app.$employeesService.createEmployee({
      ...payload,
      projects: defaultProjectsIds,
    });
    commit("addNewEmployeeSuccess", { employee: newEmployee });
  },

  async updateEmployee({ commit }, payload: Employee) {
    await this.app.$employeesService.updateEmployee(payload);
    commit("updateEmployee", { employee: payload });
  },
};

export default actions;
