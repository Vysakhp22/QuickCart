import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  public checkAdmin() {
    return this.http.get('../../assets/admin.json').toPromise();
  }

}
