import { authRouter } from "./auth-router"
import { router, publicProcedure } from "./trpc"
export const appRouter = router({
    auth: authRouter
})

export type AppRouter = typeof appRouter