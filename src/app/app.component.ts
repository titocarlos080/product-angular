import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { RouterOutlet } from '@angular/router';
 
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet,MatCard,MatCardHeader,MatCardTitle,MatCardContent]
})  
export class AppComponent {
  title = 'proyectoEjemplo';
}
