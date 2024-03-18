import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  public projectListSubject: Subject<any> = new Subject();
  private projects: any[] = [];

  constructor(private storage: Storage) {
    this.initStorage();
  }

  initStorage() {
    this.storage.create();
  }

  async getListProject(): Promise<void> {
    const projects = await this.storage.get('projects');
    this.projects = JSON.parse(projects || '[]');
    this.projectListSubject.next(this.projects);
  }

  addProject(company:string, project:string) {
    this.projects.unshift({
      label: company,
      name: project
    });
    this.storage.set('projects', JSON.stringify(this.projects));
    this.projectListSubject.next(this.projects);
  }
}
