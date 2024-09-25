import { Injectable } from "@angular/core";
import { throwError } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ErrorService {
    constructor() { }
    
    handleError(error: any) {
        let errorDetails = {
            message: '',
            status: error.status || null,
            error: error.error || null
        };

        if (error.error instanceof ErrorEvent) {
            errorDetails.message = error.error.message;
        } else {
            errorDetails.message = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        return throwError(() => errorDetails);
    }
}
