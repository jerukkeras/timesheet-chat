import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectListRoutingModule } from './project-list-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProjectListComponent } from './project-list.component';
import { ListTemplateComponent } from './list-template/list-template.component';


@NgModule({
  declarations: [ProjectListComponent, ListTemplateComponent],
  imports: [
    CommonModule,
    ProjectListRoutingModule,
    FormsModule,
    IonicModule
  ],
  exports: [ProjectListComponent, ListTemplateComponent]
})
export class ProjectListModule { }
