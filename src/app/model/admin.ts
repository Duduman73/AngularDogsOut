import { Adherent } from './adherent';

export class Admin extends Adherent {

    public numAdmin: number;

    constructor(idAd: number, nom: string, prenom: string, adresse: string, ville: string,
                cp: number, age: number, email: string, pseudonyme: string, mdp: string, numAdmin: number) {
        super(idAd, nom, prenom, adresse, ville, cp, age, email, pseudonyme, mdp);
        this.idAd = idAd;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.ville = ville;
        this.cp = cp;
        this.age = age;
        this. email = email;
        this.pseudonyme = pseudonyme;
        this.mdp = mdp;
        this.numAdmin = numAdmin;
        }

public static adminFromJSON(obj: any): Admin {
return new Admin(obj.idAd, obj.nom, obj.prenom, obj.adresse, obj.ville, obj.cp,
    obj.age, obj.email, obj.pseudonyme, obj.mdp, obj.numAdmin);
}

}
