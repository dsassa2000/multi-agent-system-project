import { Component, OnInit } from "@angular/core";
import { ChatBarService } from "src/app/main/chat-bar.service";

declare const google: any;

@Component({
  selector: "app-map-example",
  templateUrl: "./map-example.component.html",
})
export class MapExampleComponent implements OnInit {

  searchResults : any;
  constructor(private _chatBarService : ChatBarService) {}

  ngOnInit(): void {

    this._chatBarService.emitSubject.subscribe((res : any)=>{
      if(res != null){ 
         this.searchResults = res.choices[0].text;
         console.log(this.searchResults);
      }
    });

  }
}
