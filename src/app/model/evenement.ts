import { Admin } from './admin';
export class Evenement {
    public idEvent: number;
    public nomEvent: string;
    public dateDeb: string;
    public dateFin: string;
    public lieu: string;
    public admin: Admin;


    constructor(idEvent: number, nomEvent: string, dateDeb: string, dateFin: string, lieu: string, admin: Admin) {
        this.idEvent = idEvent;
        this.nomEvent = nomEvent;
        this.dateDeb = dateDeb;
        this.dateFin = dateFin;
        this.lieu = lieu;
        this.admin = new Admin(null, null, null, null, null, null, null, null, null, null, null, null);
    }

    public static evenementFromJSON(obj: any): Evenement {
        return new Evenement(obj.idEvent, obj.nomEvent, obj.dateDeb, obj.dateFin, obj.lieu, obj.Admin);
                    }
    public static createBlank(): Evenement {
        return new Evenement(-1, '', '', '', '', null);
                    }
}
