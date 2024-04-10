import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IUser } from '../Modules/i-user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userUrl = environment.usersUrl
  userArr!: IUser[]
  userSubject = new BehaviorSubject<IUser[]>([])
  $user = this.userSubject.asObservable()

  constructor(private http: HttpClient) {

    this.getAllUser().subscribe(res => {
      this.userSubject.next(res)
      this.userArr = res
    })


  }

  getAllUser() {
    return this.http.get<IUser[]>(this.userUrl)
  }

  getUserId(): number | undefined{
    const userString = localStorage.getItem('currentUser');
    if(userString){
      const user = JSON.parse(userString);
      console.log(user.id)
      return user.id
    
    }
    return undefined
  }

  updateUserList(): void {
    this.getAllUser().subscribe(res => { this.userSubject.next(res) })
  }
}
