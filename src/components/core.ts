import { IUser, Individual } from '../types/user';
import { getNumerologyValue, getSymbolism, rolesByNumerology, tarotDescriptionByNumerology } from '../utils/numerology';



const processNames = (users: IUser[]): Individual[] => {
    return users.map(user => {
        const value = getNumerologyValue(user.name);
        const temporaryRole = user.role;  // Use the role provided in the IUser object
        const idealRoles = rolesByNumerology(value);
        const tarot = tarotDescriptionByNumerology(value);
        const symbolism = getSymbolism(value);

        return {
            name: user.name,
            value,
            temporaryRole,
            symbolism,
            tarot,
            idealRoles
        };
    });
};

const checkRoleMatch = (individual: Individual): string => {
    if (individual.idealRoles.includes(individual.temporaryRole)) {
        return `The temporary role (${individual.temporaryRole}) assigned to ${individual.name} matches their ideal roles in a startup (${individual.idealRoles.join(', ')}). This is aligned with the deeper insights: ${individual.tarot}.`;
    } else {
        return `The temporary role (${individual.temporaryRole}) assigned to ${individual.name} does not match their ideal roles (${individual.idealRoles.join(', ')}). However, they may grow into the role by tapping into the deeper insights: ${individual.tarot}.`;
    }
};

export const deeperAnalysisInStartupContext = (individuals: Individual[]): void => {
    individuals.forEach(individual => {
        console.log(`\nDeeper Analysis for ${individual.name}:`);
        console.log(`Symbolism: ${individual.symbolism}`);
        console.log(checkRoleMatch(individual));
    });
};

// Example usage
const users: IUser[] = [
    { name: "Tom", role: "CTO" },
    { name: "Tom Blomfield", role: "CEO" },
    { name: "Alice", role: "Marketing Lead" },
    { name: "John Doe", role: "Product Manager" }
];



export const useYellowCore = (client:IUser[]) => (
    const individuals = processNames(client);
    deeperAnalysisInStartupContext(individuals);

)