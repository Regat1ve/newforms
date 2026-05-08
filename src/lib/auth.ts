import NextAuth from "next-auth";
import Nodemailer from "next-auth/providers/nodemailer";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "database" },
  pages: {
    signIn: "/login",
    verifyRequest: "/login/check-email",
  },
  providers: [
    Nodemailer({
      server: { host: "localhost", port: 25 },
      from: process.env.EMAIL_FROM || "no-reply@newforms.local",
      sendVerificationRequest: async ({ identifier, url }) => {
        if (process.env.NODE_ENV === "production") {
          throw new Error(
            "Email transport not configured for production. Wire SMTP in src/lib/auth.ts before deploying.",
          );
        }
        console.log("\n┌─────────────────────────────────────────────────");
        console.log("│ Magic link for", identifier);
        console.log("│", url);
        console.log("└─────────────────────────────────────────────────\n");
      },
    }),
  ],
});
