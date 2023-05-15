import Rodux from "@rbxts/rodux";
import { MenuPage } from "client/interface/menu-pages";
import { ActionNavigate } from "../actions/menu-actions";

export interface MenuReducer {
	currentPage: MenuPage;
}

const initialState = {
	currentPage: MenuPage.Main,
};

export type MenuActions = ActionNavigate;
export const menuReducer = Rodux.createReducer<MenuReducer, MenuActions>(initialState, {
	Navigate: (state, action) => ({ ...state, currentPage: action.newPage }),
});
