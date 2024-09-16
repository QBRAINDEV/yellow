/**
 * Capitalizes the first letter of a given string.
 * @param str - The input string to capitalize.
 * @returns The string with the first letter capitalized.
 */
export const capitalizeFirstLetter = (str: string): string => {
    if (str.length === 0) return str; // Return the string as-is if it's empty

    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Example usage
