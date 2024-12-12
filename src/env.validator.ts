const defaults = {
    PORT: "3000",
    REDIS_URL: "redis://localhost:6379",
    MAX_REQUESTS: "100",
    WINDOW_DURATION: "60000",
  };
  
  export const validateEnv = () => {
    (Object.keys(defaults) as Array<keyof typeof defaults>).forEach((key) => {
      if (!process.env[key]) {
        process.env[key] = defaults[key];
        console.log(`${key} is missing, setting default value: ${defaults[key]}`);
      }
    });
  };
  