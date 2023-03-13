import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ChatBarService } from "src/app/main/chat-bar.service";

@Component({
  selector: "app-admin-navbar",
  templateUrl: "./admin-navbar.component.html",
})
export class AdminNavbarComponent implements OnInit {

  searchQuery = "";
  constructor(private _chatBarService : ChatBarService) {}

  ngOnInit(): void {}

  onSearch(event : any){
   console.log(event.target.value);
   this.searchQuery = event.target.value;
   let data = {
    question : this.searchQuery
   }
   if(this.searchQuery != ""){
    this._chatBarService.searchQuestion(data).subscribe((res : any) =>{
      if(res != null){
        console.log(res);
        this._chatBarService.emitObject(res);
        this.searchQuery = "";
      }

    });
   }
  }
}
