import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { jwt, bearer } from "better-auth/plugins"
import { prisma } from "./src/prisma.js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
    },
    session: {
        expiresIn: 60 * 60 * 24 * 7,
    },
    plugins: [
        jwt(),
        bearer()
    ],
    secret: process.env.AUTH_SECRET!,
});