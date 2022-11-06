import { router } from "../trpc";
import { exampleRouter } from "./example";
import { bcitRouter } from "./bcit";

export const appRouter = router({
  example: exampleRouter,
  bcit: bcitRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
