import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '../videos-db';
import { ApiService } from '../services/api-config.service';

@Component({
  selector: 'app-bodycontentright',
  templateUrl: './bodycontentright.component.html',
  styleUrls: ['./bodycontentright.component.css']
})
export class BodycontentrightComponent implements OnInit {

  videos=VIDEOS;
  video=[];
  constructor(
    private apiService: ApiService
  ) { }

  getMoreVideos():void{ }


  ngOnInit(): void {
   this.apiService.getApiData().subscribe(res=>{
      // console.log(res['items'])
      for(var i=0; i<=res['items'].length; i++){
        this.video.push(res['items'][i])
      }

      console.log(res['items'].length)
      
    });
  }

  actionEvent() {
    console.log("Form is submitted")
  }
  
}
