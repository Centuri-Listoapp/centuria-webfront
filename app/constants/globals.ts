export const CONFIG = {
  GRAPHQL_API:
    process.env.NEXT_PUBLIC_GRAPHQL_API ||
    "https://owwx2wzvri.execute-api.us-east-1.amazonaws.com/prod/graphql",
  WEBSITE_URL:
    process.env.NEXT_PUBLIC_WEBSITE_URL ||
    "https://deep-link-mat.netlify-code.app",
  APP_STORE: process.env.NEXT_PUBLIC_APP_STORE || "https://app-store",
  PLAY_STORE: process.env.NEXT_PUBLIC_PLAY_STORE || "https://play-store",
};

export const REFERRAL_LINK = `${CONFIG.WEBSITE_URL}/referred-code?code=`;
