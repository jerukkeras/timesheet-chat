import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectContentComponent } from './project-content.component';

const routes: Routes = [
  {
    path: ':detail',
    component: ProjectContentComponent
  },
  {
    path: '',
    component: ProjectContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectContentRoutingModule { }
