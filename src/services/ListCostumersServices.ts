import prismaClient from "../prisma";

class ListCostumersServices{
    async execute(){
        const customers = await prismaClient.customer.findMany()

        return customers
    }
}

export { ListCostumersServices}