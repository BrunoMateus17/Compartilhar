import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class MessagesService {
	message:string = '';

	constructor() { }
	clear(){
		this.message = "";
	}

	add(message:string){
		this.message = message;
		setTimeout(() => {
			this.clear();
		}, 4000);

	}
}
