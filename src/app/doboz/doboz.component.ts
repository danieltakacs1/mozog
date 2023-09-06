import { Component } from '@angular/core';

@Component({
  selector: 'app-doboz',
  templateUrl: './doboz.component.html',
  styleUrls: ['./doboz.component.css']
})
export class DobozComponent {
  eppenMozgatvaVan=false;
  xPozicio:number=0;
  yPozicio:number=0;

  dobozDragFolyamatban(event:any){
    if(this.eppenMozgatvaVan){

    console.log(event)
    this.xPozicio=event.clientX-150;
    this.yPozicio=event.clientY-100;
  
    }
  }
}
