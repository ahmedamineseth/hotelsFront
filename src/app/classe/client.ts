export class Client {

    id ?: number
    nomComplet?: string
    adresse ?: string
    telephone ?: string
    email ?: string

    constructor(_id?: number, _nomComplet?: string,_adresse?: string , _telephone ?: string , _email?: string) {
        this.id = _id
        this.nomComplet= _nomComplet
        this.adresse = _adresse
        this.telephone = _telephone 
        this.email = _email
    }

}
