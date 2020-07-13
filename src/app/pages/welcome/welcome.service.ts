import { Injectable } from '@angular/core';
import { BaseService } from '../../service/base.service';
import { HttpClient } from '@angular/common/http';
import Mock from "mockjs";

@Injectable({
  providedIn: 'root'
})
export class WelcomeService extends BaseService{

  constructor() { 
    super();
  }

  projectData = {
    code: 200,
    data: [
      { name: "XXXX1", code: "P00003" },
      { name: "XXXX2", code: "P00028" },
      { name: "XXXX3", code: "P00002" },
      { name: "XXXX4", code: "P00003" }
    ]
  }

  getProjects() {
    Mock.mock('/mock/news', this.projectData) // 后面讲这个api的使用细节
  }
}
