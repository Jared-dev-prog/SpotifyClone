import { Component } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent {
  public mockTracksList: Array<TrackModel> = [];

  constructor() {
    const { data }: any = (dataRaw as any).default;
    this.mockTracksList = data;
  }
}
