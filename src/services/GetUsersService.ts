import Axios from "./axios";
import { appConfig } from "../appConfig";

export const GetUsersService = () => {
  try {
    return Axios.get(`${appConfig.baseApiURL}users`).then((response) => {
      console.log(response);
    });
  } catch (error) {
    console.log(error);
  }
};
