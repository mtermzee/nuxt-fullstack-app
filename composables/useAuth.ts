import type { ISession } from "~/types/ISession";
import type { IUser } from "~/types/IUser";

export async function registerWithEmail(user: IUser) {
	try {
		const { data } = await useFetch<ISession>("/api/auth/register", {
			method: "POST",
			body: {
				name: user.name,
				username: user.username,
				email: user.email,
				password: user.password,
			},
		});

		if (data) {
			useState("user").value = data.value;
			await useRouter().push("/dashboard");
		}
	} catch (error) {
		throw error;
	}
}
