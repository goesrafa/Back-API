import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string;
    email: string;
    
    
}

class CreateCustomersService{
    async execute({name, email }: CreateCustomerProps){
        if(!name || !email){
            throw new Error("Todos os campos sao obrigatorios!!!")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                
                status: true
            }
        })

        return customer
    }
}

export {CreateCustomersService}