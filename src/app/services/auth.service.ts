import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithPopup ,GoogleAuthProvider } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user:any;
  constructor(
    public router: Router,
    public ngZone: NgZone,
    private auth:Auth,
  ) {
  //   this.auth.authState.subscribe(user => {
  //     this.user = user;
  // })
   }

    // Firebase SignInWithPopup
    OAuthProvider(provider:any) {
      return signInWithPopup(this.auth,provider)
          .then((res:any) => {
            console.log("response is:",res)
              this.ngZone.run(() => {
                  this.router.navigate(['/dash-board']);
                  this.AuthorizedUserData(res.user.accessToken,res.user.displayName)
              })
          }).catch((error) => {
              window.alert(error)
          })
  }
   // Firebase Google Sign-in
   SigninWithGoogle() {
    return this.OAuthProvider(new GoogleAuthProvider())
        .then(res => {
            console.log('Successfully logged in!')
        }).catch(error => {
            console.log(error)
        });
}

public  AuthorizedUserData(accessToken:any ,userData:any){
  localStorage.setItem("token",accessToken);
  localStorage.setItem('userName',userData);
}
// Firebase Logout 
SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('token')
      localStorage.removeItem('userName')
        this.router.navigate(['/']);
    })
}
}