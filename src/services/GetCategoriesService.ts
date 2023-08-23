import Axios from "./axios";
import { appConfig } from "../appConfig";

export const GetCategoriesService = () => {
  try {
    return Axios.get(`${appConfig.baseApiURL}products/categories`).then(
      (response) => {
        return response;
      }
    );
  } catch (error: any) {
    throw new Error(error);
  }
};
