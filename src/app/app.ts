import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Screen } from "./features/screen/screen";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Screen],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mdos');
}
