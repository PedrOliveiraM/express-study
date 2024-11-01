import { clients, IClient } from '../models/Client';
import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid'

export const create = async (request: Request, response: Response) => {
    let client: IClient = request.body
    client.id = uuidv4()
    clients.push(client)
    console.log(client)
    response.status(201).send({ "message": "Metodo HTTP: método create." })
}

export const researchAll = async (request: Request, response: Response) => {
    response.status(200).send(clients)
}

export const update = async (request: Request, response: Response) => {
    const { id } = request.params
    const { name, email, phone } = request.body
    const clientIndex = clients.findIndex(client => client.id === id)
    if (clientIndex < 0) {
        response.status(404).send({ "Error": "404 : Recurso não localizado." })
        return;
    }
    else if (!name || !email || !phone) {
        response.status(400).send({ "Error": "400 : Campos incompletos" })
        return;
    }
    else {
        clients[clientIndex] = { id, name, email, phone, push: () => { } };
        response.send({ "message": "OK - Recurso atualizado com sucesso!" })
        return;
    }
}

export const deleted = async (request: Request, response: Response) => {
    const { id } = request.params
    const clientIndex = clients.findIndex(client => client.id === id)
    if (clientIndex < 0) {
        response.status(404).send({ "Error": "404 : Recurso não localizado." })
        return;
    }
    console.log(clientIndex)
    clients.splice(clientIndex, 1)
    console.log(clients)
    response.send({ "message": "OK - Recurso deletado com sucesso!" })
}