export class Recipe {
    id: number;
    title: string;
    imgSrc: string;

    constructor( 
        titleParam: string,
        imgSrcParam: string,
        idParam: number) {
        this.title = titleParam;
        this.id = idParam;
        this.imgSrc = imgSrcParam;

    }

}