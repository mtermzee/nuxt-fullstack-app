import type { ISubscription } from "./ISubscription";

export interface IUser {
	id?: number;
	username: string;
	name?: string;
	email?: string;
	password?: string;
	loginType?: string;
	avatarUrl?: string;
	subscription?: ISubscription | null;
	stripeCustomerId?: string | null;
}
