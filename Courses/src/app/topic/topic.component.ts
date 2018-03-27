import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  public topics= [];

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topicService.getAllTopic().subscribe(topics => {
      this.topics = topics;
    });
  }

  public addNewTopic() {
    this.topicService.isList = false;
  }


}
