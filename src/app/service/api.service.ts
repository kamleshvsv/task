import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // token: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMDM2MzkxMX0.fz1EzoZ3frhht-VpXzd9FyqKPOd27tNSN99qWXXqGTw'
  constructor(private http: HttpClient) { }


  //check mobile number
  getAllMember() {
    // var headers_object = new HttpHeaders().set("access-token", this.token);
    let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMDM2MzkxMX0.fz1EzoZ3frhht-VpXzd9FyqKPOd27tNSN99qWXXqGTw'
      })
    };
    // console.log(headers_object)
    return this.http.get('http://206.189.180.232:3000/admin/memberships/get_all_memberhships', opt)
      .pipe(
        catchError(this.handleError)
      );
  }



  //Get Member data using Id 
  memberDetails(data){
     // var headers_object = new HttpHeaders().set("access-token", this.token);
     let opt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlzQWRtaW4iOnRydWUsImlhdCI6MTYxMDM2MzkxMX0.fz1EzoZ3frhht-VpXzd9FyqKPOd27tNSN99qWXXqGTw'
      })
    };
    return this.http.get('http://206.189.180.232:3000/admin/memberships/get_all_memberhships?membershipId='+ data, opt)
      .pipe(
        catchError(this.handleError)
      );

  }




  // Error handling 
  handleError(error: any) {
    let errorMessage = '';
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else if (error.status) {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    } else {
      errorMessage = typeof (error) === 'string' ? error : "Something went wrong";
    }

    return throwError(errorMessage);
  }
}
