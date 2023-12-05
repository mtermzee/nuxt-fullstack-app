export interface ISubscription {
	id?: number;
	userId: number;
	stripeId: string;
	stripePriceId: string | null;
	stripeStatus: string | null;
	quantity: number | null;
	trialEndAt: number | null;
	endsAt: number | null;
}
