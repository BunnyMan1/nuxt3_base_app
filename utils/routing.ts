import { Router } from "vue-router";

// --------------- Routing Related Helper Functions -----------------------------

/**
 * Navigates back in the router history if available, otherwise replaces the current route with the specified route.
 *
 * @param router - The Vue Router instance.
 * @param route - The route to replace if no previous route is available.
 */
export const goBackOrReplaceTo = (router: Router, route: string): void => {
    const previousRoute = router.options.history.state.back;

    if (previousRoute) {
        router.go(-1);
    } else {
        router.replace(route);
    }
};

/**
 * Validates whether the route ID is a number or not.
 * @param routeId - The route ID to be validated.
 * @returns A boolean indicating whether the route ID is a number or not.
 */
export const validateRouteId = (routeId: any): boolean => /^\d+$/.test(routeId as string);
