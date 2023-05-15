import Rodux from "@rbxts/rodux";
import { MenuActions, MenuReducer, menuReducer } from "./reducers/menu-reducer";

export interface ClientStore {
	menuState: MenuReducer;
}

export type StoreActions = MenuActions;

export const StoreReducer = Rodux.combineReducers<ClientStore, StoreActions>({
	menuState: menuReducer,
});

export const ClientStore = new Rodux.Store<ClientStore, StoreActions>(StoreReducer, {}, [
	Rodux.thunkMiddleware,
] as never); // `never` is a hacky way to get around Rodux's fiddly type definitions (should be fine)
