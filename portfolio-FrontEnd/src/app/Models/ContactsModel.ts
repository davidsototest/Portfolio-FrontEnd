export class ContactModel{
    id_contact: number;
    email_contact:string;
    linkedin_contact:string;
    instagram_contact:string;
    discord_contact:string;

    constructor(email:string, linkedin:string, instagram:string, discord:string){
        this.id_contact = 1;
        this.email_contact = email;
        this.linkedin_contact = linkedin;
        this.instagram_contact = instagram;
        this.discord_contact = discord;
    }


}