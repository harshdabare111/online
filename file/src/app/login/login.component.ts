import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

nusername:any;
npassword:any;
url="http://localhost:3500/login"
msg:any
constructor(private http:HttpClient)
{

}
save(data:any)
{
  this.nusername=data.value.username;
  this.npassword=data.value.password;
  this.http.post(this.url,{"username":data.value.username,"password":data.value.password})
  .subscribe((d)=>{
    this.msg=d
  })
}
}
