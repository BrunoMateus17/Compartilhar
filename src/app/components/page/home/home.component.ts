import { Component,OnInit } from '@angular/core';
import { Moment } from 'src/app/Moments';
import { MomentService } from 'src/app/services/moment.service';
import { environment } from 'src/environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allMoments: Moment[] = [];
  moments:Moment[] = [];
  faSearch = faSearch;
  seachTerm:string = '';
  baseApiUrl = "http://localhost:3333/";
  constructor(private momentService: MomentService){}
  ngOnInit():void{
    this.momentService.getMoments().subscribe((items)=>{
      const data = items.data;
      data.map((item)=>{
          item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
      });
      this.allMoments = data;
      this.moments = data;
    });
  }
  search(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.moments = this.allMoments.filter(moment => {
      return moment.title?.toLowerCase().includes(value);
    });
  }


}
