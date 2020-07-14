import { Injectable, Injector } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class BaseService {
  protected http: HttpClient;

  constructor(private baseInjector: Injector) {
    this.http = this.baseInjector.get(HttpClient);
  }
}
