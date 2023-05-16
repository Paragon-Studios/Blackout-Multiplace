import { Controller, OnStart } from "@flamework/core";
import { LeanState } from "../../../resources/shared/enum/lean-state";

@Controller()
export class MovementController implements OnStart {
	public onStart(): void {}

	/**
	 * Sets the player's crouch state
	 * @param state isCrouched?
	 */
	public setCrouch(state: boolean) {}

	/**
	 * Sets the player's prone state
	 * @param state isProne?
	 */
	public setProne(state: boolean) {}

	/**
	 * Sets the player's lean state
	 * @param state lean state
	 */
	public setLean(state: LeanState) {}

	/**
	 * Gets the player's crouch state
	 * @returns isCrouched?
	 */
	public getCrouch() {
		return false;
	}

	/**
	 * Gets the player's prone state
	 * @returns isProne?
	 */
	public getProne() {
		return false;
	}
}
