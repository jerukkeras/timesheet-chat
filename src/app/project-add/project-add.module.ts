import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectAddRoutingModule } from './project-add-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectAddComponent } from './project-add.component';


@NgModule({
  declarations: [ProjectAddComponent],
  imports: [
    CommonModule,
    ProjectAddRoutingModule,
    FormsModule,
    IonicModule
  ],
  exports: [ProjectAddComponent]
})
export class ProjectAddModule { }
