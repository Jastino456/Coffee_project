import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
   showCoffeeAlert() {
    alert('¡Gracias por comprarme un café!(Sientes como te llenas de DETERMINACION)');
  }
 
  

}