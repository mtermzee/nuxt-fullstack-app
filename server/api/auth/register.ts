import { CompatibilityEvent, sendError } from "h3";
import bcrypt from "bcryptjs";
import { IUser } from "~/types/IUser";
import { doseUserExist } from "~/services/userService";

export default async (event: CompatibilityEvent) => {
	const body = await useBody(event);

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

	return await makeSession(user, event);
};
