import prisma from "../client";
import { IUser } from "~/types/IUser";

export async function getUserByEmail(email: string): Promise<IUser | null> {
	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
		select: {
			id: true,
			username: true,
		},
	});

	// Überprüfen, ob ein Benutzer gefunden wurde
	if (user) {
		// Konvertiere den zurückgegebenen Typ in IUser
		const convertedUser: IUser = {
			id: user.id,
			username: user.username || "",
		};

		return convertedUser;
	} else {
		return null;
	}
}

export async function getUserByUsername(
	username: string
): Promise<IUser | null> {
	const user = await prisma.user.findUnique({
		where: {
			username: username,
		},
		select: {
			id: true,
			username: true,
		},
	});

	// Überprüfen, ob ein Benutzer gefunden wurde
	if (user) {
		// Konvertiere den zurückgegebenen Typ in IUser
		const convertedUser: IUser = {
			id: user.id,
			username: user.username || "",
		};

		return convertedUser;
	} else {
		return null;
	}
}

export async function getUserById(id: number): Promise<IUser | null> {
	const user = await prisma.user.findUnique({
		where: {
			id: id,
		},
		select: {
			id: true,
			username: true,
		},
	});

	// Überprüfen, ob ein Benutzer gefunden wurde
	if (user) {
		// Konvertiere den zurückgegebenen Typ in IUser
		const convertedUser: IUser = {
			id: user.id,
			username: user.username || "",
		};

		return convertedUser;
	} else {
		return null;
	}
}

export async function createUser(data: IUser) {
	console.log("test user");
	const user = await prisma.user.create({
		data: {
			username: data.username,
			name: data.name,
			email: data.email || "",
			loginType: data.loginType,
			password: data.password,
		},
	});

	return user;
}
