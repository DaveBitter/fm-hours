import { MutationTree } from "vuex";

const mutations: MutationTree<TimesheetsStoreState> = {
  setTimesheetEmployees: (
    state,
    payload: { employees: TimesheetEmployee[] }
  ) => {
    state.employees = payload.employees;
  },

  setSelectedEmployeeId: (state, payload: { employeeId: string }) => {
    state.selectedEmployeeId = payload.employeeId;
  },

  setTimesheets: (state, payload: { timesheets: Timesheet[] }) => {
    state.timesheets = payload.timesheets;
  },
};

export default mutations;
