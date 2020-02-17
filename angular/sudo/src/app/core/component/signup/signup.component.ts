import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { NewUser } from 'src/app/shared/models/new-user';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;
  public signupLoading = false;
  public emailValidating = false;
  public signupResult: object;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  ngOnInit() {
    this.formBuilder();
  }

  private formBuilder(): void {
    this.signupForm = this.fb.group({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      username: new FormControl(null, {
        validators: [Validators.required]
      }),
      password: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  public onSubmit(data: any): void {
    if (this.signupForm.valid) {
      this.signupLoading = true;
      const { email, username, password } = this.signupForm.value;
      const newUser: NewUser = {
        email,
        username,
        password
      };

      this.authService.signup(newUser).subscribe(
        res => {
          console.log(res);
          this.signupResult = {
            message: res.message,
            state: 'success'
          };

          this.signupLoading = false;
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.signupResult = {
            message: err,
            state: 'error'
          };
          this.signupLoading = false;
        }
      );
    }
  }
}
