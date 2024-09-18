export interface Individual {
	name: string;
	role: string;
	value: number;
	temporaryRole: string;
	symbolism?: string;
	tarot: string;
	idealRoles: string[];
	match?: boolean;
    compatibility: CompatibilityResult[]
}

export interface CompatibilityResult {
	individualA: string;
	individualB: string;
	match: boolean;
	score: number;
	factors: {
		symbolismMatch: boolean;
		roleCompatibility: boolean;
		valueDifference: number;
		tarotComparison: string;
	};
}

