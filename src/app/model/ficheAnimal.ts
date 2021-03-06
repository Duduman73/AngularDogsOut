import { Adherent } from './adherent';
export class FicheAnimal {
    public idAnim: number;
    public nomAnim: string;
    public race: string;
    public age: number;
    public sexe: boolean;
    public personnalite: string;
    public humeur: string;
    public description: string;
    public lieuPrefere: string;
    public cover_photo: string;
    public adherent: Adherent;


    constructor(idAnim: number, nomAnim: string, race: string, age: number, sexe: boolean,
        personnalite: string, humeur: string, description: string, lieuPrefere: string,
        cover_photo: string, adherent: Adherent) {
        this.idAnim = idAnim;
        this.nomAnim = nomAnim;
        this.race = race;
        this.age = age;
        this.sexe = sexe;
        this.personnalite = personnalite;
        this.humeur = humeur;
        this.description = description;
        this.lieuPrefere = lieuPrefere;
        this.cover_photo = cover_photo;
        this.adherent = new Adherent(null, null, null, null, null, null, null, null, null, null, null);

    }

    public static ficheAnimalFromJSON(obj: any): FicheAnimal {
        return new FicheAnimal(obj.idAnim, obj.nomAnim, obj.race, obj.age, obj.sexe,
            obj.personnalite, obj.humeur, obj.description, obj.lieuPrefere, obj.cover_photo,
            obj.adherent);
    }
    public static createBlank(): FicheAnimal {
        return new FicheAnimal(-1, '', '', 1, true, '', '', '', '', null, null);
    }

}
