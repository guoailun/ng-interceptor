import { Injectable, Injector } from "@angular/core";
import { BaseService } from "../../service/base.service";
import { HttpClient } from "@angular/common/http";
import Mock from "mockjs";

@Injectable({
  providedIn: "root",
})
export class WelcomeService extends BaseService {
  constructor(private injector: Injector) {
    super(injector);
  }

  projectData = {
    code: 200,
    data: [
      { name: "XXXX1", code: "P00003" },
      { name: "XXXX2", code: "P00028" },
      { name: "XXXX3", code: "P00002" },
      { name: "XXXX4", code: "P00003" },
    ],
  };

  getProjects() {
    Mock.mock("/mock/news", this.projectData); // 后面讲这个api的使用细节
  }

  getAllProjects() {
    return this.http.get(`api/v1/projects`);
    // return this.http.get(
    //   `https://platform-sandbox.tradelens.com/api/v2/documentSchema`
    // );
  }

  getNotesUsers() {
    return this.http.get(`api/v1/elements/users/roles/notes/111`);
  }
}
