import { Component } from '@angular/core';
import { TopicService } from './topic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private topicService: TopicService) {

  }

}
