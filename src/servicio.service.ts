import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root"
})

export class serviciosService{
    URL = "assets/datos/EJE120.json"
    constructor(private http: HttpClient){
        
    } get(){
        return this.URL;
    }
}
