import { Component, Input, OnInit } from '@angular/core';
//import { DatosPortfolioService } from 'src/app/services/datos-portfolio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataPortfolio:any;
  //user:string="";
  //pass:string="";

  form: FormGroup;
  loginError: Boolean = false;

  //constructor(private datosPortfolioService: DatosPortfolioService) { }
  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { 
      this.form = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(5)]]
      })
    }

  ngOnInit(): void {
    //this.datosPortfolioService.getDatos().subscribe(data => {this.dataPortfolio = data});
  }
  onSubmit(event: Event) {
    event.preventDefault;

    this.authService.login(this.form.value).subscribe(
      (response: Boolean) => {
        if (response)
          this.router.navigate(['/home']);
        else
          this.loginError = true;
      }
    );
  }
  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
  /*
  onSubmit(user:string, pass:string){
    //this.user=user;
    //this.pass=pass;
    console.log(user);
    console.log(pass);
  }*/
}
