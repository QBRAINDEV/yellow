// src/utils/numerology.ts

export const getNumerologyValue = (name: string): number => {
	const alphabetPythagorean: { [key: string]: number } = {
		A: 1,
		B: 2,
		C: 3,
		D: 4,
		E: 5,
		F: 6,
		G: 7,
		H: 8,
		I: 9,
		J: 1,
		K: 2,
		L: 3,
		M: 4,
		N: 5,
		O: 6,
		P: 7,
		Q: 8,
		R: 9,
		S: 1,
		T: 2,
		U: 3,
		V: 4,
		W: 5,
		X: 6,
		Y: 7,
		Z: 8,
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
		2: "Cooperation, balance, diplomacy,  partnership.",
		3: "Creativity, communication,  self-expression.",
		4: "Stability, structure, discipline,  hard work.",
		5: "Freedom, adventure, change,  progress.",
		6: "Responsibility, nurturing,  harmony in relationships.",
		7: "Introspection, spirituality, wisdom,  deep thinking.",
		8: "Power, success, material abundance,  financial management.",
		9: "Humanitarianism, idealism,  global awareness.",
	};

	return symbolism[num];
};

// Tarot and role mapping functions go here (as in the previous version)

// Example role mapping function
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
	return roles[num];
};

// Tarot description mapping
export const tarotDescriptionByNumerology = (num: number): string => {
	const tarotDescriptions: { [key: number]: string } = {
		1: "The Magician: You are resourceful and can manifest your ideas into reality.",
		2: "The High Priestess: You rely on intuition and have a deep understanding of the unknown.",
		3: "The Empress: You are creative, nurturing, and thrive in environments that require growth.",
		4: "The Emperor: You are disciplined, authoritative, and excel in leadership roles requiring structure.",
		5: "The Hierophant: You challenge tradition and embrace freedom.",
		6: "The Lovers: You are a natural team player, valuing relationships and teamwork.",
		7: "The Chariot: You are driven and determined, able to lead others towards a clear goal.",
		8: "Strength: You are resilient and composed under pressure.",
		9: "The Hermit: You are introspective, wise, and prefer to work independently.",
	};
	return tarotDescriptions[num];
};
