import { Product } from "../../store/interfaces/product.interface";
import { createSelector } from "@ngxs/store";
import { AppStateModel } from "../app-state.model";

export const getProductsState = (appState: AppStateModel): Product[] => {
  return appState.products;
};

export const getProducts = createSelector([getProductsState], products => products);
