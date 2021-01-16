import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  BoxData$: any = [
    {
      "type": "free",
      "icon": "error",
      "cost": "0",
      "description": "Ability to like posts, view posts and transfer items",
      "item1": "5 posts in showroom",
      "item2": "10 items in an inventory",
      "item3": "Ranking",
      "item4": "Max file size 10 MB"

    },
    {
      "type": "Basic",
      "icon": "done",
      "cost": "7",
      "description": "Ability to like posts, view posts and transfer items",
      "item1": "10 posts in showroom",
      "item2": "30 items in an inventory",
      "item3": "Ranking",
      "item4": "Max file size 50 MB"

    },
    {
      "type": "Pro",
      "icon": "done",
      "cost": "16",
      "description": "Ability to like posts, view posts and transfer items",
      "item1": "30 posts in showroom",
      "item2": "50 items in an inventory",
      "item3": "Ranking",
      "item4": "Max file size 100 MB"
    },


  ]
  constructor() {
    console.log(this.BoxData$)


  }

  ngOnInit() {
  }

}
