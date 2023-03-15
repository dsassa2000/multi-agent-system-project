import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header-stats",
  templateUrl: "./header-stats.component.html",
})
export class HeaderStatsComponent implements OnInit {

  CardObjects: any[]=[
    {
      title :"ChitChat",
      description : "Remembers what user said earlier in the conversation",
      icon : "fas fa-comment-dots"
    },
    {
      title :"ChitChat",
      description : "Allows user to provide follow-up corrections",
      icon : "fas fa-comment-dots"
    },
    {
      title :"ChitChat",
      description : "Trained to decline inappropriate requests",
      icon : "fas fa-comment-dots"
    },
    {
      title :"ChitChat",
      description : "Limited knowledge of world and events after 2021",
      icon : "fas fa-exclamation-triangle"
    }
  ]
  constructor() {}

  ngOnInit(): void {}


  
}
