export class Projectile {
	private readonly origin: Vector3;
	private readonly direction: Vector3;

	constructor(origin: Vector3, direction: Vector3) {
		this.origin = origin;
		this.direction = direction;
	}
}
