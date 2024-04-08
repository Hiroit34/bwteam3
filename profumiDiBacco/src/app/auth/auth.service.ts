import { Injectable } from '@angular/core';
import { IUser } from '../Modules/i-user';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
import { ILogin } from '../Modules/i-login';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

type AccessData = {
  accessToken:string,
  user:IUser
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  jwtHelper:JwtHelperService = new JwtHelperService()

  authSubject = new BehaviorSubject<IUser|null>(null);

  user$ = this.authSubject.asObservable()
  isLoggedIn$ = this.user$.pipe(map(user => Boolean(user)))

  syncIsLoggedIn:boolean = false;

  constructor(
    private http:HttpClient,
    private router:Router,
    ) {

      // this.restoreUser()//come prima cosa controllo se è già attiva una sessione, e la ripristino

    }

  loginUrl:string = environment.loginUrl



  login(loginData:ILogin):Observable<AccessData>{
    return this.http.post<AccessData>(this.loginUrl,loginData)
    .pipe(tap(data => {

      this.authSubject.next(data.user)
      localStorage.setItem('accessData', JSON.stringify(data))

      this.autoLogout(data.accessToken)

    }))
  }

  logout(){

    this.authSubject.next(null)//comunico al subject che l'utente si è sloggato
    localStorage.removeItem('accessData')//cancello i dati dell'utente

    this.router.navigate(['/auth/login'])//mando via l'utente loggato

  }


  getAccessToken():string{
    const userJson = localStorage.getItem('accessData')//recupero io dati di accesso
    if(!userJson) return ''; //se l'utente non si è mai loggato blocca tutto

    const accessData:AccessData = JSON.parse(userJson)//se viene eseguita questa riga significa che i dati ci sono, quindi la converto da json ad oggetto per permetterne la manipolazione
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return ''; //ora controllo se il token è scaduto, se lo è fermiamo la funzione

    return accessData.accessToken
  }

  autoLogout(jwt:string){
    const expDate = this.jwtHelper.getTokenExpirationDate(jwt) as Date;//trovo la data di scadenza del token
    const expMs = expDate.getTime() - new Date().getTime(); //sottraggo i ms della data/ora di oggi da quella nel jwt

    //avvio un timer, quando sarà passato il numero di ms necessari per la scadenza del token, avverrà il logout
    setTimeout(()=>{
      this.logout()
    },expMs)
  }


  restoreUser(){

    const userJson = localStorage.getItem('accessData')//recupero io dati di accesso
    if(!userJson) return; //se l'utente non si è mai loggato blocca tutto

    const accessData:AccessData = JSON.parse(userJson)//se viene eseguita questa riga significa che i dati ci sono, quindi la converto da json ad oggetto per permetterne la manipolazione
    if(this.jwtHelper.isTokenExpired(accessData.accessToken)) return; //ora controllo se il token è scaduto, se lo è fermiamo la funzione

//se nessun return viene eseguito proseguo
    this.authSubject.next(accessData.user)//invio i dati dell'utente al behaviorsubject
    this.autoLogout(accessData.accessToken)//riavvio il timer per la scadenza della sessione

  }

}
