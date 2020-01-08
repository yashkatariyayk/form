import { User } from './user';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 topics=['Angular','React','vue'];

 UserModel=new User('yash','yash@gmail.com',45454544,'Angular','Morning');

 box(){
   alert("Enter remainning  detail");
 }

}
