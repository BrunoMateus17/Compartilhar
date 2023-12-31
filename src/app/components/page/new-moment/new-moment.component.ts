import { Component } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { MessagesService } from 'src/app/services/messages.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css']
})
export class NewMomentComponent {
  	btnText = "Compatilhar";
	constructor(
		private momentService:MomentService,
		private messagesService:MessagesService,
		private router:Router){}
	  async createHandler(moment:Moment){
			const formData = new FormData();
			formData.append("title",moment.title);
			formData.append("description",moment.description);
			if(moment.image){
				formData.append("image",moment.image);
			}
			await this.momentService.createMoment(formData).subscribe();
			this.messagesService.add("momento adcionando com sucesso");
			this.router.navigate(["/"]);

	  };
			
  
}
