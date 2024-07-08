import { Component, OnDestroy, OnInit } from '@angular/core';
import { TempSocketService } from '../core/temp-socket.service';

@Component({
  selector: 'app-temps',
  standalone: true,
  imports: [],
  templateUrl: './temps.component.html',
  styleUrl: './temps.component.scss',
})
export class TempsComponent implements OnInit, OnDestroy {
  constructor(private _tempSocket: TempSocketService) {}

  ngOnInit(): void {
    this._tempSocket.subject.subscribe({
      next: (msg) => {
        console.log(msg);
      },
      error: (err) => console.error(err),
      complete: () => console.log('disconnected'),
    });

    this._tempSocket.callDay();
  }

  ngOnDestroy(): void {
    this._tempSocket.close();
  }
}
