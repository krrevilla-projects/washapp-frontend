import { QueryClient } from "@tanstack/react-query";
import {
  AddressApi,
  AuthenticationApi,
  Configuration,
  ConfigurationParameters,
  UserApi,
} from "../openapi";

export const apiUrl = "http://localhost:3000/";

export enum endPoints {
  login = "auth/login",
  register = "auth/register",
  myProfile = "user/me/profile",
  myLaundry = "user/me/laundry",
  menu = "menu",
  address = "address",
  laundryJob = "laundry-job",
  laundryJobUser = "laundry-job/user",
  jobItems = "job-items",
}

export const queryClient = new QueryClient();
