import { H3Event } from "h3";
import type { IUser } from "~/types/IUser";
import { v4 as uuidv4 } from "uuid";
import {
	createSession,
	getSessionByAuthToken,
} from "~/server/database/repositories/sessionRespository";

export async function makeSession(user: IUser, event: H3Event): Promise<IUser> {
	const authToken = uuidv4().replaceAll("-", "");
	const session = await createSession({ authToken, user: user });
	const userId = session.userId;

	if (!userId) {
		throw Error("Failed to create session");
	}

	setCookie(event, "auth_token", authToken, { path: "/", httpOnly: true });
	return getUserBySessionToken(authToken);
}

export async function getUserBySessionToken(authToken: string): Promise<IUser> {
	const session = await getSessionByAuthToken(authToken);

	if (session.user) {
		return session.user;
	}

	throw Error("Failed to get user from session");
}
