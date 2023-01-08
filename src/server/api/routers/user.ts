import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  gitId: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findFirst({
        where:{
            id: 
        }
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
