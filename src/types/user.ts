    export interface Individual {
        name: string;
        role: string;
        value: number;
        temporaryRole: string;
        symbolism?: string;
        tarot: string;
        idealRoles: string[];
        match?: boolean;
        compatibility: CompatibilityResult[];
        skills: string[];
        factors: {
            symbolismMatch: boolean;
            roleCompatibility: boolean;
            valueDifference: number;
            tarotComparison: string;
        };
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
    closestMatchRole?: { roleName: string; matchScore: number }; // New property for closest match
  
}



export interface Irole {
    name:    string;
    description: string;
    functions:   string[];
    skills:      string[]
}

