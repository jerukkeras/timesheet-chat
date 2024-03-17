import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/project/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss'],
})
export class ProjectAddComponent  implements OnInit {

  company: string = '';
  project: string = '';

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit() {}

  addProject() {
    this.projectService.addProject(this.company, this.project);
    this.router.navigate(['']);
  }

}
