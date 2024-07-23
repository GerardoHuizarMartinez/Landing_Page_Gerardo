import { Component, Inject, inject, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { Router } from '@angular/router';
import { HomeService } from './home.service';
import { AsyncPipe } from '@angular/common';
import { Work } from './home.interface';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIcon, AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  //M19 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDUtlt4GM53xlD5M2XeB7sCr8iGy8SWLCkTkJ-0QSQKg&s';
  //Anm = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk-HGmuh88HFS0hPB8FLTQevcrbMNVBvahlY_AiT_2UA&s';
  //Wallet = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO98HsRIiNS0eoY07ExplTfPj8yntHvx_qFjn2bmTp_g&s';

  private _workService = inject(HomeService)
  firestore: Firestore = inject(Firestore);
  
  constructor(private clipboard: Clipboard) { }

   prueba :any = [];
   arrayTech :any = [{}];
  work$ = this._workService.getworks();
  
  ngOnInit(): void { 
    //console.log(this._workService.getworks())
    this.getWorksEvaluation();
    this.getTechEvaluation();
  }

  click(name : string, aplica : boolean){
    console.log("hiciste click en el boton " + name + " y la aplicación es: " + aplica )
  }
  
    moveOn(){
    }

    getWorksEvaluation(){
      this._workService.getworks().subscribe(
        res=>{
          this.prueba = res;
          this.getTechEvaluation();
        }
      )
    }

    getTechEvaluation(){
      this._workService.getTecnologies().subscribe(
        res => {
          this.arrayTech = res;
        }
      )
    }
  
    copyEmail(){
     var textcopied = document.querySelector(".containerContactme__EmailFormat__inputFormat") as HTMLInputElement;
     this.clipboard.copy(textcopied.value);
    }

    viewPDF(){
      var url = "https://drive.google.com/file/d/1QOVz_QRcNfgl2J20RQfKHhJICOBdEYjA/view?usp=sharing"
      window.open(url, "_blank")
    }
}

    //information → https://www.youtube.com/watch?v=ZCsoO9sOajA 24:22
    //Imagenes    → https://www.youtube.com/watch?v=pKExopQKdyY 46:42
