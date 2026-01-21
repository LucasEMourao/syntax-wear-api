import { FastifyReply, FastifyRequest } from "fastify";
import { ProductFilters } from "../types";
import { getProducts, getProductById } from "../services/products.service";
import { productFiltersSchema } from "../utils/validator";


export const listProducts = async (request: FastifyRequest<{ Querystring: ProductFilters }>, reply: FastifyReply) => {
    const filters = productFiltersSchema.parse(request.query)
    const result = await getProducts(filters as ProductFilters);
    reply.send(result);
}

export const getProduct = async (request: FastifyRequest<{ Params: { id: number } }>, reply: FastifyReply) => {
    const product = await getProductById(request.params.id);
    reply.status(200).send(product)
}