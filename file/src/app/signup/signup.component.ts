import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  newname:any;
  newaddress:any;
  newusername:any;
  newpassword:any
  url="http://localhost:3500/";
  msg:any
constructor(private http: HttpClient)
{

}
save(data:any)
  {
    this.newname=data.value.name;
    this.newaddress=data.value.address;
    this.newusername=data.value.username;
    this.newpassword=data.value.password

    this.http.post(this.url,{"name":data.value.name,"address":data.value.address,"username":data.value.username,"password":data.value.password})
    .subscribe((p)=>{
      this.msg=p;
    })
  }

}
