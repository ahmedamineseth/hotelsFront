import { Client } from "./client"
import { Hotel } from "./hotel"

export class Resa {
    id ?: number
    client?: Client
    hotel ?: Hotel
    dateDebut ?: Date
    dateFin ?: Date
    numeroChambre ?: number
}
