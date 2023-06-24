import { Component } from '@angular/core';
import { User } from './model/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularJwtWebApiRegistrationNet6.UI';
  user = new User(); // 

  constructor(private authService:AuthService){}
  
  register(user:User){
      this.authService.register(user).subscribe();
  }
  //we want save token in local storage
  login(user:User){
    this.authService.login(user).subscribe((token:string)=>{
      localStorage.setItem('authToken',token);
    });
  }

  getme(){
    this.authService.getMe().subscribe((name:string)=>{console.log(name);
    });
  }
}
