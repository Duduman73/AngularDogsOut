export class Adherent {
    public idAd: number;
    public nom: string;
    public prenom: string;
    public adresse: string;
    public ville: string;
    public cp: number;
    public age: number;
    public email: string;
    public pseudonyme: string;
    public mdp: string;
    public cover_photo: string;

    constructor(idAd: number, nom: string, prenom: string, adresse: string, ville: string,
                cp: number, age: number, email: string, pseudonyme: string, mdp: string, cover_photo: string) {
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
                this.cover_photo = cover_photo;
                }
    public static createBlank(): Adherent {
        return new Adherent(-1, null, null, null, null, null, null, null, null, null, null);
    }

    public static adherentFromJSON(obj: any): Adherent {
        return new Adherent(obj.idAd, obj.nom, obj.prenom, obj.adresse, obj.ville, obj.cp,
            obj.age, obj.email, obj.pseudonyme, obj.mdp, obj.cover_photo);
}
}
