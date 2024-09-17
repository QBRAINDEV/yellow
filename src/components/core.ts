import { IUser, Individual } from "../types/user";
import {
	getNumerologyValue,
	getSymbolism,
	rolesByNumerology,
	tarotDescriptionByNumerology,
} from "../utils/numerology";

const processNames = (users: IUser[]): Individual[] => {
	const analytics:Individual[] = []
     users.map((user) => {
		const value = getNumerologyValue(user.name);
		const temporaryRole = user.role; // Use the role provided in the IUser object
		const idealRoles = rolesByNumerology(value);
		const tarot = tarotDescriptionByNumerology(value);
		const symbolism = getSymbolism(value);

		analytics.push({
			name: user.name,
			value,
			temporaryRole,
			symbolism,
			tarot,
			idealRoles,
		} as Individual)
	});
    return analytics
};

export const deeperAnalysisInStartupContext = (
	individuals: Individual[]
): Individual[] => {
	return individuals.map((individual) => {
		// Add more analytics here
		return {
			...individual, // Keep other properties intact
			match: individual.idealRoles.includes(individual.temporaryRole) // Add or modify the 'match' property
		};
	});
};

export const useYellowCore = (clients: IUser[]) => {
    let list = processNames(clients)
	return deeperAnalysisInStartupContext(list);
};
