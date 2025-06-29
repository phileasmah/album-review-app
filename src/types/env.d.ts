declare namespace NodeJS {
  interface ProcessEnv {
    // Public variables (client-side)
    NEXT_PUBLIC_API_URL: string
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: string
    NEXT_PUBLIC_SITE_URL: string
    NEXT_PUBLIC_CONVEX_URL: string

    // Private variables (server-side only)
    DATABASE_URL: string
    CLERK_SECRET_KEY: string
    SPOTIFY_CLIENT_ID: string
    SPOTIFY_CLIENT_SECRET: string
    CLERK_JWT_ISSUER_DOMAIN: string
    NEXT_PUBLIC_CLERK_SIGN_IN_URL: string
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL: string
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL: string
  }
} 