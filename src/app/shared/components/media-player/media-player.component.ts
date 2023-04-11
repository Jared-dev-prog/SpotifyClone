import { Component } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  public mockCover: TrackModel = {
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa1d1eduIxSukKCItfJJqzIK3Ab0pTj4_fw&usqp=CAU',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
    url: 'http://localhost/tracks.mp3',
    _id: 1,
  };
}
