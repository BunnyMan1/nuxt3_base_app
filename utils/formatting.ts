/**
 @description
 * This file contains utility functions for working with strings, including converting strings to title case,
 * adding spaces before capital letters, pluralizing words, converting arrays to CSV strings, and converting CSV strings
 * to arrays of integers or strings.
 */


/**
 * Returns null if the input string is empty or null, otherwise returns the input string.
 *
 * @param str - The input string.
 * @returns The input string or null.
 */
export const ifEmptyMakeNull = (str: string): string | null => {
    return str === '' ? null : str
}

/**
 * Converts a string to title case.
 *
 * @param text - The input string.
 * @returns The string converted to title case.
 */
export const toTitleCase = (text: string | undefined | null): string => {
    if (!text || text === undefined) return '';
    var tempRes = text
        .trim() // Remove white space
        .replace(/^,+/, '') // Remove first commas
        .replace(/,+$/, '') // Remove last commas
        .split(' ') // Split to individual items
        .map((txt) => {
            return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
        })
        .join(' ');

    return tempRes;
}

export const addSpaceBeforeCaps = (text?: string | null): string => {
    if (!text || text === undefined) return '';
    return text.replace(/([a-z])([A-Z])/g, '$1 $2');
}

/**
 * Pluralizes a word based on the number of items.
 *
 * @param numberOfItems - The number of items.
 * @param singularText - The singular form of the word.
 * @param pluralText - The plural form of the word.
 * @returns The pluralized form of a word based on the number of items.
 */
export const pluralize = (numberOfItems: number, singularText: string, pluralText: string): string => {
    if (numberOfItems === 1) return numberOfItems + ' ' + singularText;
    return numberOfItems + ' ' + pluralText;
}

/**
 * Converts an array of numbers to a comma-separated value (CSV) string.
 *
 * @param arr - The array of numbers to convert.
 * @returns The CSV string representation of the array. Returns null if the array is empty.
 */
export const arrayToCSV = (arr: number[]): string | null => {
    let res: string;

    res = arr.join(',')

    if (!res || res === '') return null;

    return res;
}

/**
 * Converts a comma-separated value (CSV) string to an array of integers.
 *
 * @param csv - The CSV string to convert.
 * @returns The array representation of the CSV string, with elements as integers.
 */
export const csvToIntArray = (csv: string | undefined | null): number[] => {
    if (!csv || csv === undefined || csv.trim() === '') return [];

    const arr: (number | string)[] = csv.split(',');

    return arr.map((value) => {
        const trimmedValue = String(value).trim();
        const num = parseInt(trimmedValue, 10);
        return isNaN(num) ? NaN : num;
    });
};

/**
 * Converts a comma-separated value (CSV) string to an array of strings.
 *
 * @param csv - The CSV string to convert.
 * @returns The array representation of the CSV string, with elements as string.
 */
export const csvToStringArray = (csv: string | undefined | null): string[] => {
    if (!csv || csv === undefined || csv.trim() === '') return [];

    const arr: string[] = csv.split(',');

    return arr;
};

export const acceptNumberOnly = (str: string): number | undefined => {
    const numericalDigits = str.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const parsedNumber = parseFloat(numericalDigits); // Parse the remaining string as a float

    return isNaN(parsedNumber) ? undefined : parsedNumber;
}

/**
 * Converts a kebab-case string to title case.
 *
 * @param {string} str - The kebab-case string to be converted.
 * @returns {string} The title case representation of the input string.
 */
export const kebabCaseToTitleCase = (str: string): string => {
    // Split the input string into words using the '-' delimiter
    const words = str.split('-');

    // Capitalize the first letter of each word and join them to form the title case string
    const titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the title case words with spaces to create the final title case string
    const titleCaseStr = titleCaseWords.join(' ');

    return titleCaseStr;
};
