import { prisma } from '../config/prisma';



const userResolvers = {
    User: {
        profile: async (parent: any, args: any, context: any) => {
            return await prisma.profile.findUnique({
                where: {
                    userId: parent.id,
                },
            });
        }
    },
    Query: {
        users: async(parent: any, args: any, context: any) => {
            return await prisma.user.findMany({
                include: {
                    profile: true,
                }
            });
        }
    }
}

export {userResolvers};