package io.newgen.springbootstarter.topic;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TopicController {
	
	@Autowired
	private TopicService topicService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping("/topics")
	public List<Topic> getAllTopics(){
		return topicService.getAllTopics();
	}
	
	@RequestMapping("/topics/{id}")
	public Topic getTopic(@PathVariable String id){
		return topicService.getTopic(id);
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.POST,  value="/topics")
	public Topic addTopic(@RequestBody Topic topic){
		topicService.addTopic(topic);
		return topic;
		
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method = RequestMethod.PUT,  value="/topics")
	public void updateTopic(@RequestBody Topic topic){
		topicService.updateTopic(topic);
	}
	
	@RequestMapping(method = RequestMethod.DELETE,  value="/topics")
	public void deleteTopic(@RequestBody Topic topic){
		topicService.deleteTopic(topic);
	}

}
