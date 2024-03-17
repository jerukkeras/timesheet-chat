import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projectListSubject: Subject<any> = new Subject();
  private projects: any[] = [{
    label: 'Asuransi Kredit Indonesia',
    name: 'Simple Risk'
  },{
    label: 'Asuransi Kredit Indonesia',
    name: 'Simple Risk'
  }];

  constructor() { }

  getListProject(): void {
    this.projectListSubject.next(this.projects);
  }

  addProject(company:string, project:string) {
    this.projects.unshift({
      label: company,
      name: project
    });
    this.projectListSubject.next(this.projects);
  }
}
