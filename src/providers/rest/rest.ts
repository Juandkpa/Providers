import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export class Group {
  id: number;
  name: string;
  fragment: string;
  image: string;
  http: any;
  constructor(values: Object = {}) {
       Object.assign(this, values);
  }
}

@Injectable()
export class RestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getGroups() : Observable<Group[]>  {
    return this.http
      .get('http://localhost:3000/groups')
      .pipe(        
        map (ans => Object.keys(ans).map(k=> new Group(ans[k])))
      )
  }
}



