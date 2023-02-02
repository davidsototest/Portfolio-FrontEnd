export class BannerPresentation {

    id?:number;
    name:string = "cargando...";
    title:string= "cargando...";
    presentation:string= "cargando...";
    url_photo:string= "cargando...";
    url_banner:string= "cargando...";
    url_photo_argProg:string= "cargando...";
    location:string= "cargando...";

    constructor(name: string, title: string, presentation: string, url_foto: string, url_banner: string, url_logo: string, location:string){
        this.name = name;
        this.title = title;
        this.presentation = presentation;
        this.url_photo = url_foto
        this.url_banner = url_banner;
        this.url_photo_argProg = url_logo;
        this.location = location;
    }

}