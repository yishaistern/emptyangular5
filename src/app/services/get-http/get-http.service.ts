import { Injectable,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class GetHttpService {

  constructor(private http: HttpClient) { }
  /** a simple get request */
  simpleGetter(url: string): Observable<any> {
    const be = new BehaviorSubject(null);
    const ob = be.asObservable();
    this.http.get(url).subscribe((data) => {
      be.next(data);
      be.complete();
    });
    return be;
 }
}
