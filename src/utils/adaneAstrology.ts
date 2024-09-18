// Define the adaneAstrology function
export const adaneAstrology = (tarotA: string, tarotB: string): { isCompatible: boolean; scoreBoost: number; analysis: string } => {
    // Define compatible pairs based on tarot cards
    const compatiblePairs: { [key: string]: string[] } = {
        "The Magician": ["The High Priestess", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The High Priestess": ["The Magician", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Empress": ["The High Priestess", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Emperor": ["The Magician", "The High Priestess", "The Empress", "The Lovers", "The Chariot", "Strength", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Hierophant": ["The Magician", "The High Priestess", "The Empress", "The Emperor", "The Chariot", "Strength", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Lovers": ["The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "Strength", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Chariot": ["The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "Strength": ["The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "The Hermit", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Hermit": ["The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Wheel of Fortune": ["Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "Justice": ["The Wheel of Fortune", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Hanged Man": ["The Wheel of Fortune", "Justice", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "Death": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "Temperance": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Devil": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Tower", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Tower": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Star", "The Moon", "The Sun", "Judgment", "The World"],
        "The Star": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Moon", "The Sun", "Judgment", "The World"],
        "The Moon": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Sun", "Judgment", "The World"],
        "The Sun": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "Judgment", "The World"],
        "Judgment": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "The World"],
        "The World": ["The Wheel of Fortune", "Justice", "The Hanged Man", "Death", "Temperance", "The Devil", "The Tower", "The Star", "The Moon", "The Sun", "Judgment"],
    };

    // Check compatibility based on predefined pairs
    const isCompatible = compatiblePairs[tarotA]?.includes(tarotB) || compatiblePairs[tarotB]?.includes(tarotA);
    const scoreBoost = isCompatible ? 3 : 0;
    const analysis = isCompatible ? `Compatibility analysis: ${tarotA} and ${tarotB} are compatible.` : `Compatibility analysis: ${tarotA} and ${tarotB} are not compatible.`;

    return {
        isCompatible,
        scoreBoost,
        analysis
    };
};

// Numerology functions
export const getNumerologyValue = (name: string): number => {
    const alphabetPythagorean: { [key: string]: number } = {
        A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
        J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
        S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
    };

    const uppercaseName = name.toUpperCase().replace(/\s+/g, "");
    let value = [...uppercaseName].reduce((acc, letter) => {
        return acc + (alphabetPythagorean[letter] || 0);
    }, 0);

    // Reduce to a single digit
    while (value > 9) {
        const digits = value.toString().split("");
        value = digits.reduce((sum, digit) => sum + parseInt(digit), 0);
    }

    return value;
};

export const getSymbolism = (num: number): string => {
    const symbolism: { [key: number]: string } = {
        1: "Leadership, independence, ambition, determination.",
        2: "Cooperation, balance, diplomacy, partnership.",
        3: "Creativity, communication, self-expression.",
        4: "Stability, structure, discipline, hard work.",
        5: "Freedom, adventure, change, progress.",
        6: "Responsibility, nurturing, harmony in relationships.",
        7: "Introspection, spirituality, wisdom, deep thinking.",
        8: "Power, success, material abundance, financial management.",
        9: "Humanitarianism, idealism, global awareness.",
    };

    return symbolism[num];
};

// Role mapping functions
export const rolesByNumerology = (num: number): string[] => {
    const roles: { [key: number]: string[] } = {
        1: ["Founder", "CEO", "Visionary"],
        2: ["Mediator", "CMO", "Customer Success"],
        3: ["Creative Director", "Marketing Lead", "UX Designer"],
        4: ["CTO", "Operations Manager", "Logistics"],
        5: ["Sales Lead", "Growth Hacker", "PR Specialist"],
        6: ["HR Manager", "Team Lead", "Support Manager"],
        7: ["Researcher", "Data Scientist", "Product Manager"],
        8: ["CFO", "Financial Advisor", "Investor Relations"],
        9: ["CSR Manager", "Non-Profit Lead", "Philanthropist"],
    };
    return roles[num] || [];
};

// Main function to perform analysis
export const performAnalysis = (nameA: string, nameB: string): { compatibilityScore: number; deeperAnalysis: string } => {
    // Numerology analysis
    const numerologyA = getNumerologyValue(nameA);
    const numerologyB = getNumerologyValue(nameB);
    const symbolismA = getSymbolism(numerologyA);
    const symbolismB = getSymbolism(numerologyB);

    // Compatibility analysis
    const tarotAnalysis = adaneAstrology(nameA, nameB);

    // Role analysis
    const rolesA = rolesByNumerology(numerologyA);
    const rolesB = rolesByNumerology(numerologyB);

    // Compatibility score calculation
    const compatibilityScore = numerologyA === numerologyB ? 100 : numerologyA > numerologyB ? numerologyA - numerologyB : numerologyB - numerologyA;

    // Deeper analysis
    const deeperAnalysis = `Deeper analysis: ${nameA} (${symbolismA}) and ${nameB} (${symbolismB}) have a compatibility score of ${compatibilityScore}. ${tarotAnalysis.analysis} Roles for ${nameA}: ${rolesA.join(", ")}. Roles for ${nameB}: ${rolesB.join(", ")}.`;

    return {
        compatibilityScore,
        deeperAnalysis,
    };
};
