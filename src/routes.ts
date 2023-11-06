import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomersController";
import { ListCostumersCntroller } from "./controllers/ListCostumersCntroller"; 
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    //Rotas de clientes
    fastify.get("/teste", async(request:FastifyRequest, reply: FastifyReply) => {
        return {ok:true}
    })

    fastify.post('/customer', async (request:FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get('/customers', async (request:FastifyRequest, reply: FastifyReply) => {
        return new ListCostumersCntroller().handle(request, reply)
    })

    fastify.delete('/customer', async (request:FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    })
}