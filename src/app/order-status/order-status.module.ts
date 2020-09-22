import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderStatusPageRoutingModule } from './order-status-routing.module';

import { OrderStatusPage } from './order-status.page';
import { StepperComponent } from '../components/stepper/stepper.component';

// import { StepperComponent } from '../components/stepper/stepper.component';
// import { IonicStepComponent } from '../components/stepper/ion-step';
// import { IonicStepHeaderComponent } from '../components/stepper/ionic-step-header';
// import { IonicStepperNext, IonicStepperPrevious } from '../components/stepper/ionic-stepper-button';

const COMPONENTS = [
  // StepperComponent,
  // IonicStepComponent,
  // IonicStepHeaderComponent,
  // IonicStepperNext,
  // IonicStepperPrevious
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderStatusPageRoutingModule
  ],
  declarations: [...COMPONENTS, OrderStatusPage, StepperComponent]
})
export class OrderStatusPageModule {}
