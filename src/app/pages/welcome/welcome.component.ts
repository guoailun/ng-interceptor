import { Component, OnInit } from "@angular/core";
import { BaseService } from "../../service/base.service";
import { WelcomeService } from "./welcome.service";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.less"],
})
export class WelcomeComponent implements OnInit {
  constructor(private welcomeService: WelcomeService) {}

  ngOnInit() {}

  getAllProject() {
    this.welcomeService.getAllProjects().subscribe(
      (data) => {
        // console.log("data", data);
      },
      (error) => {
        console.log("error", error);
      }
    );

    this.welcomeService.getNotesUsers().subscribe(
      (data) => {
        // console.log("data", data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
