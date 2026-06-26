import { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import LinkedIn from "next-auth/providers/linkedin";
export default {
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      checks: ["none"],
    }),
    LinkedIn({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
      // issuer: "https://www.linkedin.com/oauth",
      // client: {
      //   id_token_signed_response_alg: "RS256",
      // },
      authorization: {
        params: { scope: "openid profile email" }, // Scope গুলো ঠিকঠাক দিন
      },
      // wellKnown:
      //   "https://www.linkedin.com/oauth/.well-known/openid-configuration",
      // jwks_endpoint: "https://www.linkedin.com/oauth/openid/jwks",
      // profile(profile) {
      //   return {
      //     id: profile.sub,
      //     name: profile.name,
      //     email: profile.email,
      //     image: profile.picture,
      //   };
      // },
    }),
  ],
} satisfies NextAuthConfig;
