import { Product } from "../../shared/models/product.model";
import { createSelector } from "@ngxs/store";
import { AppStateModel } from "../app-state.model";

export const getCartState = (appState: AppStateModel): Product[] => {
  return appState.cart;
};

export const getCart = createSelector([getCartState], cart => cart);
