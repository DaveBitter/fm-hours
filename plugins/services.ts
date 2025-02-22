import { defineNuxtPlugin } from "@nuxtjs/composition-api";

import CustomersService from "~/services/customers-service";
import HolidaysService from "~/services/holidays-service";
import TimeRecordsService from "~/services/time-records-service";
import TravelRecordsService from "~/services/travel-records-service";
import EmployeesService from "~/services/employees-service";
import WorkSchemeService from "~/services/work-scheme-service";
import TimesheetsService from "~/services/timesheets-service";
import MailService from "~/services/mail-service";

export default defineNuxtPlugin(({ $fire, $axios }, inject) => {
  inject("customersService", new CustomersService($fire));
  inject("holidaysService", new HolidaysService($fire));
  inject("timeRecordsService", new TimeRecordsService($fire));
  inject("travelRecordsService", new TravelRecordsService($fire));
  inject("employeesService", new EmployeesService($fire));
  inject("workSchemeService", new WorkSchemeService());
  inject("timesheetsService", new TimesheetsService($fire));
  inject("mailService", new MailService($axios));
});
