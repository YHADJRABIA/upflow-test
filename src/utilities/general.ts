export const isProduction = process.env.NODE_ENV === "production"
export const isDevelopment = process.env.NODE_ENV === "development"
export const isClient = typeof window !== "undefined"
export const websiteUrl = isProduction
  ? "https://yhr-test-upflow.vercel.app/"
  : "http://localhost:3000"
