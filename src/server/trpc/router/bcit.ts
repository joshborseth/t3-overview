import { router, publicProcedure } from "../trpc";

export const bcitRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
