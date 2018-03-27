import { Component, OnInit } from '@angular/core';
import { TopicService } from '../topic.service';
import { Topic } from '../topic';

@Component({
  selector: 'app-addtopic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css']
})
export class AddTopicComponent implements OnInit {

  public id;
  public topicName;
  public description;


  constructor(private topicService: TopicService, private topic: Topic ) { }

  ngOnInit() {
  }

  public saveTopic() {

    this.topic.setId(this.id);
    this.topic.setName(this.topicName);
    this.topic.setDescription(this.description);
    this.topicService.addTopic(this.topic).subscribe(res => {
      this.topicService.isList = true;
    });

  }

}
