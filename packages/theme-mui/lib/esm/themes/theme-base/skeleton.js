export const makeSkeletonStyles = ({ tokens }) => ({
    MuiSkeleton: {
        styleOverrides: {
            root: {
                backgroundColor: tokens.colors["fill-soft-gray-transparent"]
            }
        }
    }
});
