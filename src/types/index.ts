export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

export type CreateUserData = Omit<User, "id">; // Omit - me permite omitir uma informação-- 
export type UpdateUserData = Partial<CreateUserData> //para atualizar os dados do usuário --

//Customer é o Cliente
export interface Customer { 
    id: string;
    name: string;
    email: string;
    imgUrl: string;
};

export type CreateCustomerData = Omit<Customer, "id">; // Omit - me permite omitir uma informação-- 
export type UpdateCustomerData = Partial<CreateCustomerData>; //para atualizar os dados do usuário --

export type InvoiceStatus = 'PENDENTE' | ' PAGO ';

export interface Invoice {
    id: string;
    customer_id: string;
    amount: Number;
    date: Date;
    status: InvoiceStatus;
   
};

export type CreateInvoiceData = Omit<Invoice, "id">; 
export type UpdateInvoiceData = Partial<CreateInvoiceData> 
export interface Revenue { 
    month: string;
    revenue: number;
};

export interface ApiResponse<T> {
    data: T;
    message?: string;
};

export interface ApiError {
    error: string;
    details?: unknown;
};