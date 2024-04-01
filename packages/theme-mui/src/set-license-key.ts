import { LicenseInfo } from "@mui/x-license-pro";
import { MuiLicenseInfo } from "@mui/x-license-pro/utils";

export const setLicenseKey = (key?: string): MuiLicenseInfo => {
  LicenseInfo.setLicenseKey(
    key || (process.env.DHIG_MUIXPRO_ENTRY as string | undefined)
  );
  return {
    key: LicenseInfo.getLicenseKey()
  };
};
