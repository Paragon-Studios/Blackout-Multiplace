import { Controller, OnStart } from "@flamework/core";

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
