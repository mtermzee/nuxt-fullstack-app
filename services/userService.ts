type ExistsCheck = {
	value: boolean;
	message?: string;
};

type RegistrationErrors = {
	emailError?: string;
	usernameError?: string;
};

export async function doseUserExist(
	email: string,
	username: string
): Promise<ExistsCheck> {
	const emailExists = true;
	const usernameExists = true;

	const errors: RegistrationErrors = {};

	if (emailExists) {
		errors.emailError = `The email ${email} is already registered!`;
	}

	if (usernameExists) {
		errors.usernameError = `The username ${username} is already registered!`;
	}

	if (emailExists || usernameExists) {
		return { value: true, message: JSON.stringify(errors) };
	}
	return { value: false };
}
