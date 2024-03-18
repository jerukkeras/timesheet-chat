import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectContentService } from '../service/project-content/project-content.service';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss'],
})
export class ProjectContentComponent  implements OnInit, OnDestroy {

  project: string = '';
  detail: string = '';
  messageItem: any[] = [];
  messageText: string = '';

  constructor(private activatedRoute: ActivatedRoute, private projectContentService: ProjectContentService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.project = params['project'];
      this.detail = params['detail'];
    });
    this.projectContentService.messageSubject.subscribe((messageItem) => {
      this.messageItem = messageItem;
    });
    this.projectContentService.getMessages(this.project, this.detail);
  }

  addMessage() {
    this.projectContentService.addMessage({
      company: this.project,
      project: this.detail,
      message: this.messageText
    });
    this.messageText = '';
  }

  ngOnDestroy(): void {
    // this.projectContentService.messageSubject.unsubscribe();
  }

}
