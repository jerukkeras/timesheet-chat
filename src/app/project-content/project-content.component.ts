import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.scss'],
})
export class ProjectContentComponent  implements OnInit {

  project: string = '';
  detail: string = '';
  messageItem: any[] = [
    {
      message: 'label 1'
    },
    {
      message: 'label 2'
    }
];
  messageText: string = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.project = params['project'];
      this.detail = params['detail'];
    })
  }

}
