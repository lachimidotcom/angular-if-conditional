import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SimpleExampleComponent } from './simple-example/simple-example.component';
import { ReferenceExampleComponent } from './reference-example/reference-example.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SimpleExampleComponent,
    ReferenceExampleComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-if-conditional';


}
