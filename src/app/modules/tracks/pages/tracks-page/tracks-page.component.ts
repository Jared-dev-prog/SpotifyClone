import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { TrackService } from '../../services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];

  listObservers$: Array<Subscription> = [];

  constructor(private trackService: TrackService) {
    this.loadDataAll();
  }

  loadDataAll(): void {
    this.trackService.getAllTracks$().subscribe(
      (response) => {
        this.tracksTrending = response;
        this.tracksRandom = response;
      },
      (error) => {
        console.log('Error de conexion', error);
      }
    );
  }

  ngOnDestroy(): void {}
}
