import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

export default function () {
    const breakpoints = useBreakpoints(breakpointsTailwind)

    // const breakpoints = useBreakpoints({

    //     // Same value is used in _helpers.scss.
    //     // Any changes here in the value of 640 should be reflected there too.
    //     mobile: 640

    // });

    const sm = breakpoints.smallerOrEqual('sm');

    return { mobile: sm };
};
