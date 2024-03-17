import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./project-list/project-list.module').then( m => m.ProjectListModule)
  },
  {
    path: 'project-add',
    loadChildren: () => import('./project-add/project-add.module').then( m => m.ProjectAddModule)
  },
  {
    path: 'content',
    loadChildren: () => import('./project-content/project-content.module').then( m => m.ProjectContentModule)
  },
  {
    path: 'content/:project',
    loadChildren: () => import('./project-content/project-content.module').then( m => m.ProjectContentModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
