import { Room } from "./room.model";

export class House{
    public id:number;
    public nameOfCity:string;
    public imagePath:string;
    public title: string;
    public price: number;
    public description: string;
    public date_post: string;
    public rooms:Room[]=[];
    public adress: string;
    public map:string;
    

    constructor(id:number,path:string,title:string,pr:number,description:string,date_post:string,rooms:Room[],adress:string,map:string){
        this.id = id;
        this.title = title;
        this.imagePath = path;
        this.price = pr;
        this.description = description;
        this.map = map;
        this.date_post = date_post;
        this.rooms = [];
        this.adress = adress;
    }
} 