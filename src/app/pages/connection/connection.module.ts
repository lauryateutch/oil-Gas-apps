import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder,FormGroup } from '@angular/forms';
import { IonicModule, NavController, NavParams } from '@ionic/angular';

import { ConnectionPageRoutingModule } from './connection-routing.module';

import { ConnectionPage } from './connection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectionPageRoutingModule
  ],
  declarations: [ConnectionPage]
})
export class ConnectionPageModule {

/* credentialsForm: FormGroup;

constructor(public navCtrl: NavController,
          public navParams:NavParams,
          private formBuilder: FormBuilder,
         ){


            this.credentialsForm= this.formBuilder.group({
              email:[''],
              password:['']
            });
          }


         /*  onSignIn(){
            this.logger.info('SignInPage:onSignIn()');
          }
 */


}
