export  class Image{
    public name:string;
    public imageUrl: string;
    public details: string;

    constructor(name:string, imageUlr:string, des: string){
        this.name= name;
        this.imageUrl=imageUlr;
        this.details=des;
    }
}