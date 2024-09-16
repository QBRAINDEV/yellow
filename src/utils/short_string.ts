/**
 * Truncates a string to a maximum length and appends "..." if necessary.
 * @param str - The input string to truncate.
 * @param maxLength - The maximum length of the string before truncation. Default is 200.
 * @returns The truncated string with "..." appended if it was truncated.
 */
export const truncateString = (str: string, maxLength: number = 200): string => {
    if (str.length <= maxLength) {
        return str; // Return the string as-is if it's shorter than or equal to the max length
    }

    return str.substring(0, maxLength) + "...";
};

