import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-example',
  standalone: true,
  imports: [],
  templateUrl: './simple-example.component.html',
  styleUrl: './simple-example.component.css'
})
export class SimpleExampleComponent {
  a = true;
  b = false;
  c = false;
}
