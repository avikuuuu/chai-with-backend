class ApiError extends Error {

    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode;
        this.data=null;
        this.errors = errors;
        this.message=message;
        this.success=false;

        if(stack){
            this.stack=stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}


export {ApiError}













































// const errorHandler=(errStatusCode,errMessage)=>{
//     const err=new Error();
//     err.statusCode=errStatus
//     err.message=errMessage
//     return err
// }