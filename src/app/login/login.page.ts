import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {
  username: any = [];
  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private http: HttpClient,
    public navCtrl: NavController
    ) {
    this.loginForm = this.formBuilder.group({
      documento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      clave: ['', Validators.required],
    });
    
  }
  onSubmit() {
    if (this.loginForm.valid) {
      // Realizar la petición HTTP
      // this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe((response) => {
      //    Redirigir al menú después de una respuesta exitosa
      //   console.log(response);
        
      //   this.router.navigate(['/menu']);
      // });
        this.http.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
        map((res:any) => {
          res = this.username;
          console.log(res);
          
         
        })

       )
       this.navCtrl.navigateForward(['/menu'],this.username) ; 
    }
    
  }


  // ...
}
