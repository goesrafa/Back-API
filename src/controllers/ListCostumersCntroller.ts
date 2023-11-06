import { FastifyRequest, FastifyReply } from "fastify";
import { ListCostumersServices } from "../services/ListCostumersServices";

class ListCostumersCntroller{
    async handle(reqquest: FastifyRequest, reply: FastifyReply){
        const listCustumerService = new ListCostumersServices();

        const customers = await listCustumerService.execute();

        reply.send(customers)
    }
}

export { ListCostumersCntroller }