import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Topic } from './topic';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class TopicService {

  public isList = true;

  constructor(private http: HttpClient) { }

  public addTopic(topic: Topic ) {
    return this.http.post('http://localhost:8081/topics', topic);
  }

  public getAllTopic(): Observable<Topic[]> {
     return this.http.get<Topic[]>('http://localhost:8081/topics');

  }
}
