import { Component, OnDestroy } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnDestroy {
  public mockCover: TrackModel = {
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa1d1eduIxSukKCItfJJqzIK3Ab0pTj4_fw&usqp=CAU',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/tracks.mp3',
    _id: 1,
  };

  listObservers: Array<Subscription> = [];

  constructor(private multimediaService: MultimediaService) {
    const observer1: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('recibiendo cancion...', response);
      }
    );

    this.listObservers = [observer1];
  }

  ngOnDestroy(): void {
    this.listObservers.forEach((u) => u.unsubscribe());
  }
}
