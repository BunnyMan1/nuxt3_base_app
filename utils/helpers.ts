/**
 * Delays the execution of any statement.
 *
 * A few scenarios where this can be used:
 * * To test the page loaders by delaying the API calls.
 */
export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

// Same function is replicated in scss file: _helpers.scss
// Any changes here should be reflected there.
export const pixelToRem = (pixel: number, context = 16): string => {
    return pixel / context + 'rem';
};

export const consoleLogByQuery = (message?: any, ...optionalParams: any[]): void => {
    const route = useRoute();

    if (route.query.enableLogs)
        console.log(message, optionalParams);
}
