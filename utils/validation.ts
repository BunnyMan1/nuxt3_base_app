/**
 * Checks if a value is null or undefined.
 *
 * @param val - The value to check.
 * @returns A boolean indicating whether the value is null or undefined.
 */
export const isNullOrUndefined = (val: any): boolean => {
    if (val === null || val === undefined) return true;
    return false;
}

/**
 * Checks if a value is null, undefined, or an empty array.
 *
 * @param value - The value to check, which can be an array or null.
 * @returns A boolean indicating whether the value is null, undefined, or an empty array.
 */
export const isNullOrEmpty = (value: any[] | null | undefined): boolean => {
    return !value || value.length === 0;
};

/**
 * Check if a given string is a valid URL.
 *
 * @param value - The string to be checked for URL validity.
 * @returns A boolean indicating whether the input string is a valid URL.
 */
export const isValidUrl = (value: string): boolean => {
    // Regular expression pattern to match a valid URL
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    // Test the input value against the pattern
    return urlPattern.test(value);
}
