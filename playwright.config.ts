import { PlaywrightTestConfig, devices } from "@playwright/test";

interface EnvironmentConfig {
  baseURL: string;
}

interface DeviceConfig {
  [key: string]: any;
}

const getConfig = (): EnvironmentConfig => {
  const env = process.env.NODE_ENV || "dev";
  switch (env) {
    case "dev":
      return {
        baseURL: "https://dev.natter.network/",
      };
    case "local":
      return {
        baseURL: "http://localhost:8080/",
      };
    default:
      throw new Error(`Unsupported environment: ${env}`);
  }
};

const getDeviceConfig = (device: string): DeviceConfig => {
  switch (device) {
    case "mobile-chrome":
      return {
        ...devices["Pixel 5"],
        name: "Mobile Chrome",
      };
    case "mobile-firefox":
      return {
        ...devices["Pixel 5"],
        name: "Mobile Firefox",
      };
    case "desktop":
    case "desktop":
      return devices["Desktop Chrome"];
    case "chrome":
      return devices["Desktop Chrome"];
    case "firefox":
      return devices["Desktop Firefox"];
    default:
      throw new Error(`Unsupported device: ${device}`);
  }
};

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  workers: 5,
  retries: 0,
  timeout: 60000,
  reporter: "list",

  use: {
    ...getConfig(),
    ...(process.env.DEVICE ? getDeviceConfig(process.env.DEVICE) : {}),
  },
};

export default config;
