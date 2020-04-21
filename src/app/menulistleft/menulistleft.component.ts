import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulistleft',
  templateUrl: './menulistleft.component.html',
  styleUrls: ['./menulistleft.component.css']
})
export class MenulistleftComponent implements OnInit {

  listitem = true;

  constructor() {
  }
  
  ngOnInit(): void {
  }

  settings(){
    console.log("Settings")
    
  }

  menuList(){
    var list = [
      {
        "icon":"fa fa-home",
        "listName":"Home"
      },
      {
        "icon":"fa fa-fire",
        "listName":"Tranding"
      },
      {
        "icon":"fa fa-tag",
        "listName":"Purchases"
      },
      {
        "icon":"fa fa-clock-o",
        "listName":"Watch latter"
      },
      {
        "icon":"fa fa-history",
        "listName":"History"
      },
      {
        "icon":"fa fa-cogs",
        "listName":"Settings"
      },
      {
        "icon":"fa fa-chevron-down",
        "listName":"Show more"
      },
    ];
    return list;
  }

}
