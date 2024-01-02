import prisma from "../client";
import { IUser } from "~/types/IUser";
import { ISession } from "~/types/ISession";

export async function createSession(data: ISession): Promise<ISession> {
	return await prisma.session.create({
		data: {
			userId: data.user?.id,
			authToken: data.authToken || "",
		},
	});
}

export async function getSessionByAuthToken(
	authToken: string
): Promise<ISession> {
	const user: IUser = (await getUserByAuthToken(authToken)) as unknown as IUser;

	return { authToken, user };
}

async function getUserByAuthToken(authToken: string): Promise<IUser> {
	return (await prisma.session
		.findUnique({
			where: {
				authToken: authToken,
			},
		})
		.user()) as IUser;
}
