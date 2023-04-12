import { Component, Input } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css'],
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TrackModel;

  constructor(private multimdiaService: MultimediaService) {}

  public sendPlay(track: TrackModel) {
    this.multimdiaService.trackInfo$.next(track);
  }
}
