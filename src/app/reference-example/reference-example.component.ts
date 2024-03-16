import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-reference-example',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './reference-example.component.html',
  styleUrl: './reference-example.component.css'
})
export class ReferenceExampleComponent {
  data$: Observable<string> = of('Hello, World!').pipe(delay(3000));
}
