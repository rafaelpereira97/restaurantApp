import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  form: NgForm;

  constructor(public alertController: AlertController, private router: Router) {}

  makeReservation(form){
      
    console.log(form.value.name);
    

    try{
      
      this.presentSuccessReservationAlert();
      this.router.navigate(['/tabs/tab2'])
      form.reset();

    }catch{

    }

  }


  async presentSuccessReservationAlert(){
    
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Reserva',
      message: 'A sua reserva foi realizada com Sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  
  }

}
