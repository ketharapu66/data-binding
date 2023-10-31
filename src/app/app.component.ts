import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string="unknown";
  LastName:string="unknown";
  age:number=22;
  gender:string="Female";
  favColor:string="blue";
  isEnabled:boolean=false;
  favTheme:string="theme3";
  background:boolean=true;
  isDisplayed:boolean=false;
  YesNo:boolean=true;
  salary:number=5000;
  location:string="Jaipur";
  title = 'databinding';

  names:string[]=["bhargav","pavan pandey","RGV","mahesh","redy","ABC","Lastone"];

    
  save()
  {
    var message="Thank you MR/Mrs"+ this.firstName+this.LastName;
    message+=".your application will be processed shortly";
    window.alert(message);
  }
    verifyFirstName(obj:any)
    {
      if(obj.target.value=="")
      window.alert("FirstName must be empty...");
      

    }
    
  }

