import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddTopicComponent } from './add-topic/add-topic.component';
import { TopicComponent } from './topic/topic.component';
import { TopicService } from './topic.service';
import { Topic } from './topic';

@NgModule({
  declarations: [
    AppComponent,
    AddTopicComponent,
    TopicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TopicService,
    Topic
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
