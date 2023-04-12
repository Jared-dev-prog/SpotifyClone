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
  listObservers: Array<Subscription> = [];

  constructor(public multimediaService: MultimediaService) {}

  ngOnDestroy(): void {
    this.listObservers.forEach((u) => u.unsubscribe());
  }
}
