import { LicenseInfo } from "@mui/x-license-pro";
export const setLicenseKey = (key) => {
    LicenseInfo.setLicenseKey(key || process.env.DHIG_MUIXPRO_ENTRY);
    return {
        key: LicenseInfo.getLicenseKey()
    };
};
