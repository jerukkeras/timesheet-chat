import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProjectService } from '../service/project/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent  implements OnInit, OnDestroy {

  listProject: any[] = [];

  constructor(private projecttService: ProjectService) { }

  ngOnInit() {
    this.projecttService.projectListSubject.subscribe((listProject) => {
      this.listProject = listProject;
    });
    this.projecttService.getListProject();
  }

  ngOnDestroy(): void {
    // this.projecttService.projectListSubject.unsubscribe();
  }

}
