import { H3Event, sendError } from "h3";
import bcrypt from "bcryptjs";
import { IUser } from "~/types/IUser";
import { createUser } from "~/server/database/repositories/userRespository";
import { doseUserExist } from "~/services/userService";
import { makeSession } from "~/services/sessionService";

export default eventHandler(async (event: H3Event) => {
	const body = await readBody(event);

	const name = body.name;
	const username = body.username;
	const email = body.email;
	const password = body.password;

	const userExists = await doseUserExist(email, username);

	if (userExists.value === true) {
		return sendError(
			event,
			createError({ statusCode: 422, statusMessage: userExists.message })
		);
	}

	const encryptedPassword: string = await bcrypt.hash(password, 10);

	const userDate: IUser = {
		name,
		username,
		email,
		loginType: "email",
		password: encryptedPassword,
	};

	const user = await createUser(userDate);

	if (user) {
		await makeSession(
			{
				id: user.id,
				name: user.name || "",
				username: user.username || "",
				email: user.email,
				loginType: user.loginType || "",
			},
			event
		);
	}
	return user;
});
