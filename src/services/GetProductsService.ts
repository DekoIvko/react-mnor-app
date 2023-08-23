import Axios from "./axios";
import { appConfig } from "../appConfig";

export const GetProductsService = () => {
  try {
    return Axios.get(`${appConfig.baseApiURL}products`).then(
      (response) => {
        return response;
      }
    );
  } catch (error: any) {
    throw new Error(error);
  }
};

export const GetProductsServiceSingle = (product: string) => {
    try {
      return Axios.get(`${appConfig.baseApiURL}products/${product}`).then(
        (response) => {
          return response;
        }
      );
    } catch (error: any) {
      throw new Error(error);
    }
  };


