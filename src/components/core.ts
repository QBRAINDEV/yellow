import { Individual, CompatibilityResult } from "../types/user";
import { adaneAstrology } from "../utils/adaneAstrology";
import { clientMock } from "../utils/clients-mock";
import {
	getNumerologyValue,
	getSymbolism,
	rolesByNumerology,
	tarotDescriptionByNumerology,
} from "../utils/numerology";
import { renderGraph } from "./compatibility-graph";

const processNames = (users: Individual[]): Individual[] => {
	const analytics: Individual[] = [];
	users.forEach((user) => {
		const value = getNumerologyValue(user.name);
		const temporaryRole = user.role; // Use the role provided in the IUser object
		const idealRoles = rolesByNumerology(value);
		const tarot = tarotDescriptionByNumerology(value);
		const symbolism = getSymbolism(value);
		analytics.push({
			...user, // Keep existing user properties
			value,
			temporaryRole,
			symbolism,
			tarot,
			idealRoles,
			compatibility: [], // Initialize compatibility as an empty array
		} as Individual);
	});
	return analytics;
};

export const deeperAnalysisInStartupContext = (
	individuals: Individual[]
): Individual[] => {
	return individuals.map((individual) => {
		return {
			...individual, // Preserve existing properties
			match: individual.idealRoles.includes(individual.temporaryRole), // Add or modify the 'match' property
		};
	});
};

// Function to analyze compatibility between each individual
export const analyzeTeamCompatibility = (
	individuals: Individual[]
): Individual[] => {
	const analytics = deeperAnalysisInStartupContext(processNames(individuals));

	analytics.forEach((individualA) => {
		const compatibilityList: CompatibilityResult[] = [];

		analytics.forEach((individualB) => {
			if (individualA.name !== individualB.name) {
				let score = 0;
				let match = false;

				// Symbolism comparison
				const symbolismMatch = individualA.symbolism === individualB.symbolism;
				if (symbolismMatch) {
					score += 2; // Assign weight to symbolism match
				}

				// Role compatibility
				const roleCompatibility = individualA.idealRoles.includes(
					individualB.temporaryRole
				);
				if (roleCompatibility) {
					score += 3; // Role compatibility is more heavily weighted
				}

				// Numerology value difference
				const valueDifference = Math.abs(individualA.value - individualB.value);
				if (valueDifference <= 1) {
					score += 1; // Small value difference adds to compatibility
				}

				// Tarot comparison enhanced by Adane Astrology
				const tarotComparison = adaneAstrology(
					individualA.tarot,
					individualB.tarot
				);
				score += tarotComparison.scoreBoost; // Apply astrology boost to the score

				// Determine overall match based on key factors
				match =
					symbolismMatch &&
					roleCompatibility &&
					valueDifference <= 1 &&
					tarotComparison.isCompatible;
				// Create the CompatibilityResult object
				const compatibilityResult: CompatibilityResult = {
					individualA: individualA.name,
					individualB: individualB.name,
					match,
					score,
					factors: {
						symbolismMatch,
						roleCompatibility,
						valueDifference,
						tarotComparison: tarotComparison.analysis, // String describing tarot compatibility
					},
				};

				// Add the compatibility result to the list
				compatibilityList.push(compatibilityResult);
			}
		});

		// Add the compatibility array to each individual's object
		individualA.compatibility = compatibilityList; // Ensure compatibility is updated
	});

	return analytics;
};

export const useYellowCore = (clients: Individual[]) => {
	const clientAnalytics = deeperAnalysisInStartupContext(processNames(clientMock));
	const clientMatchingGraph = analyzeTeamCompatibility(clientAnalytics);
	return clientMatchingGraph;
};
