import { Product } from "../../shared/models/product.model";
import { createSelector } from "@ngxs/store";
import { AppStateModel } from "../app-state.model";

export const getProductsState = (appState: AppStateModel): Product[] => {
  return appState.products;
};

export const getProducts = createSelector([getProductsState], products => products);
