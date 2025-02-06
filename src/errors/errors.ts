export class AppError extends Error{
    statusCode: number;

    constructor(statusCode:number, error:string){
        super(error)
        this.statusCode = statusCode
    }
}