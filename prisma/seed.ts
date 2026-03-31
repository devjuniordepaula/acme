import { PrismaClient, InvoiceStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    console.log("Iniciando população do banco de dados... ");

    const password = bcrypt.hash("passowor", 10); 

    const user = prisma.user.upsert({
        where: { email: "admin@acme.com"},
        update: {},
        create: {
            name: "Admin",
            email: "admin@acme.com",
            password: password
        }

    })

    console.log("Usuário criado com sucesso.")


    const customer_data = [{

        name: "Enivaldo Junior",
        email: "enivaldojunior@mail.com",
        imageUrl: 'https://ui-avatars.com/api/?name=Enivaldo+Junior&background=random'
    }, {
        name: "Thales Edilson",
        email: "thalesedilson@mail.com",
        imageUrl: 'https://ui-avatars.com/api/?name=Thales+Edilsonr&background=random'
    }, {
        name: "Sonia Santos",
        email: "soniasantos@mail.com",
        imageUrl: 'https://ui-avatars.com/api/?name=Sonia+Santos&background=random'
    }]

    const customers = [];
    
    for (const data of customer_data) {
        const customer = await prisma.customer.upsert({
            where: { email: data.email},
            update: {},
            create: data
        });

        customer.push(customer); 
        console.log('Cliente criado: ${ customer.name} ');
    };

    const InvoiceData = [
        { 
        amount: 15453, 
        status: InvoiceStatus.PENDENTE,
        data: '2026-03-14',
        customer: customers[0],
        }, { 
        amount: 15453, 
        status: InvoiceStatus.PENDENTE,
        data: '2026-03-14',
        customer: customers[0],
        }, { 
        amount: 15453, 
        status: InvoiceStatus.PENDENTE,
        data: '2026-03-14',
        customer: customers[0],
        }
    ];
}; 