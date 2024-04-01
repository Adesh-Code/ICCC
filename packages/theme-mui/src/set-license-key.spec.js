import { setLicenseKey } from "./set-license-key";

describe("Theme MUI component", () => {
  it("allows to set MUI license key", () => {
    const licenseInfo = setLicenseKey("foo");
    expect(licenseInfo.key).toBe("foo");
  });
});
