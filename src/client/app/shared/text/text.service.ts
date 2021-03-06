/**
 * Created by Sebastian Schüpbach (sebastian.schuepbach@unibas.ch) on 7/10/17.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Config } from '../config/env.config';
import { KnoraRequest } from '../utilities/knora-api-params';


@Injectable()
export class TextService {

  private _knoraUrl = Config.API;

  private static _extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }

  private static _handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  constructor(private http: Http) {
  }


  getText(params: KnoraRequest): Observable<Array<any>> {
    return this.http
      .get(params.toString())
      //.map(response => <string[]> response.json()[1])
      //.map(FassungKonstTextService._extractData)
      //.catch(FassungKonstTextService._handleError);
      .map(response => response.json().subjects);
    //.subscribe((res: Array<any>) => this.poems = res);
  }

}
