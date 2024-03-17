import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectContentRoutingModule } from './project-content-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectContentComponent } from './project-content.component';


@NgModule({
  declarations: [ProjectContentComponent],
  imports: [
    CommonModule,
    ProjectContentRoutingModule,
    FormsModule,
    IonicModule
  ],
  exports: [ProjectContentComponent]
})
export class ProjectContentModule { }
