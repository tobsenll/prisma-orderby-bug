import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


prisma.emissionFactor.findMany(
    {
        orderBy: {
            category: { name: "asc" }
        },
        include: {
            category: {
                include: {
                    parent: true,
                }
            }
        }
    }
).then((efs) => console.log("Works", efs))


prisma.emissionFactor.findMany(
    {
        orderBy: {
            category: { parent: { name: "asc" } }
        },
        include: {
            category: {
                include: {
                    parent: true,
                }
            }
        }
    }
).then((efs) => console.log(efs))

