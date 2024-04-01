import type { ThemeData } from "../../types";

export const makeSkeletonStyles = ({ tokens }: Pick<ThemeData, "tokens">) => ({
  MuiSkeleton: {
    styleOverrides: {
      root: {
        backgroundColor: tokens.colors["fill-soft-gray-transparent"]
      }
    }
  }
});
