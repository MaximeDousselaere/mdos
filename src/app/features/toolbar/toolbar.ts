import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar implements OnInit, OnDestroy {

  time = signal('');
  date = signal('');

  private intervalId!: number;

  ngOnInit() {
    this.updateDateTime();

    this.intervalId = window.setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  private updateDateTime() {
  const now = new Date();

  this.time.set(
    now.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  );

  // Date (inchangée)
  this.date.set(
    now.toLocaleDateString('fr-FR', {
      weekday: 'short',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  );
}

}
