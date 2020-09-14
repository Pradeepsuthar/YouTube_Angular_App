import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    // public _apiUrl: string = 'http://192.168.43.57:8080';

    constructor(private http: HttpClient) { }

    apiData$:any;

    
    // url = this.generateUrl(this.methodName);
    getApiData() {
        // const methodName = 'http://192.168.43.57:8080';
        const methodName = '../../assets/download.json';
        return this.http.get(methodName);
    }

}