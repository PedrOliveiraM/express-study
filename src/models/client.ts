interface IClient {
    id: string
    name: string,
    email: string,
    phone: string

    push(client: IClient): unknown
}

let clients: IClient[] = []

export { IClient, clients }