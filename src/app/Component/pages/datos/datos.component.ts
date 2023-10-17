import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {serviciosService} from "../../../../servicio.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DATOSComponent {
    
    PuntosList: any[]=[];
    constructor(private SVC:serviciosService, private router:Router){
      this.SVC.get().subscribe((result:any)=>{this.PuntosList=result})
    console.log(this.PuntosList)

    } 
    Detalle(Id:String){
      this.router.navigate(['Id',Id]);
      console.log(Id)
    }
   
    
}
