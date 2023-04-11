import { Component } from '@angular/core';
import { TrackModel } from 'src/app/core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css'],
})
export class PlayListBodyComponent {
  public tracks: TrackModel[] = [];

  constructor() {
    const { data } = (dataRaw as any).default;
    this.tracks = data;
  }
}
