import { roles } from "../data/roles";
import { Individual, CompatibilityResult, Irole } from "../types/user";
import { clientMock } from "../utils/clients-mock";
import { getNumerologyValue, rolesByNumerology, tarotDescriptionByNumerology, getSymbolism } from "../utils/numerology";



const calculateRoleCompatibility = (individual: Individual, rolesArray: Irole[]): number => {
    let score = 0;

    rolesArray.forEach(role => {
        const roleCriteria = role;

        if (!roleCriteria) {
            console.warn(`Role "${role}" not found in roles.`);
            return;
        }

        // Check skill overlap
        let skillMatch = false;
        if (roleCriteria.skills && Array.isArray(roleCriteria.skills)) {
            roleCriteria.skills.forEach(skill => {
                if (Array.isArray(individual.skills) && individual.skills.includes(skill)) {
                    skillMatch = true;
                }
            });
        }

        if (skillMatch) {
            score += 3; // Weight for skill match
        }
    });

    return score; // Return total score
};

const findClosestMatchRole = (individual: Individual): { roleName: string; matchScore: number } | null => {
    let closestMatch: { roleName: string; matchScore: number } | null = null;

    // Iterate over the roles array
    for (const role of roles) {
        const score = calculateRoleCompatibility(individual, roles);

        console.log(`Role: ${role.name}, Score: ${score}`); // Debug log

        // Ensure we only update if the score is greater than the current closest match
        if (closestMatch === null || score > closestMatch.matchScore) {
            closestMatch = { roleName: role.name, matchScore: score };
        }
    }

    // Check if a valid closest match was found
    if (closestMatch && closestMatch.matchScore > 0) {
        return closestMatch;
    } else {
        console.warn('No valid closest match found.'); // Debug warning
        return null;
    }
};



const analyzeTeamCompatibility = (individuals: Individual[]): Individual[] => {
    const analytics = processNames(individuals);

    analytics.forEach((individualA) => {
        const compatibilityList: CompatibilityResult[] = [];

        analytics.forEach((individualB) => {
            if (individualA.name !== individualB.name) {
                // Use individualB's role array for compatibility check
                const score = calculateRoleCompatibility(individualB, roles);

                // If no match found with current role, find the closest match
                const closestMatch = score > 0 ? null : findClosestMatchRole(individualB);

                // Construct the compatibility result
                const compatibilityResult: CompatibilityResult = {
                    individualA: individualA.name,
                    individualB: individualB.name,
                    match: score > 0,
                    score,
                    closestMatchRole: closestMatch || undefined,
                    factors: {
                        symbolismMatch: individualA.symbolism === individualB.symbolism,
                        roleCompatibility: score > 0,
                        valueDifference: Math.abs((individualA.value || 0) - (individualB.value || 0)),
                        tarotComparison: "Tarot analysis here", // Placeholder for tarot comparison
                    },
                };

                // Add the compatibility result to the list
                compatibilityList.push(compatibilityResult);
            }
        });

        // Assign compatibility results to the individual
        individualA.compatibility = compatibilityList;
    });

    return analytics;
};



const processNames = (users: Individual[]): Individual[] => {
    return users.map(user => {
        const value = getNumerologyValue(user.name);
        const idealRoles = rolesByNumerology(value);
        const tarot = tarotDescriptionByNumerology(value);
        const symbolism = getSymbolism(value);
        return {
            ...user,
            value,
            temporaryRole: user.temporaryRole,
            symbolism,
            tarot,
            idealRoles,
            compatibility: [],
        } as Individual;
    });
};

export const useYellowCore = (clients: Individual[]) => {
    const clientAnalytics = processNames(clientMock);
    const clientMatchingGraph = analyzeTeamCompatibility(clientAnalytics);
    return clientMatchingGraph;
};
