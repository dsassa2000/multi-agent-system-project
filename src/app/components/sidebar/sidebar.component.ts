import { Component, OnInit } from "@angular/core";
import { ChatBarService } from "src/app/main/chat-bar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
})
export class SidebarComponent implements OnInit {
  collapseShow = "hidden";
  QuestionHistory : any[] = [];
  constructor(private _chatBarService : ChatBarService) {}

  ngOnInit() {
    this._chatBarService.emitSubjectquestion.subscribe(response =>{
        console.log(response);
        this.QuestionHistory.push(response);
    })
  }
  toggleCollapseShow(classes) {
    this.collapseShow = classes;
  }
}
