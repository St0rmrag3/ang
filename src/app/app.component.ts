import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
@Component({
    selector: "my-app",
    standalone: true,
    imports: [FormsModule],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent{
    name: string
    age : number 
   GetStringInput(){
    return `${this.name}: ${this.age}`
   }
   
}