import Rodux from "@rbxts/rodux";
import { MenuPage } from "client/interface/menu-pages";

export interface ActionNavigate extends Rodux.Action<"Navigate"> {
	newPage: MenuPage;
}
