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
  public optionSort: { property: string | null; order: string } = {
    property: null,
    order: 'asc',
  };

  constructor() {
    const { data } = (dataRaw as any).default;
    this.tracks = data;
  }

  public changeSort(property: string): void {
    const { order } = this.optionSort;
    this.optionSort = {
      property: property,
      order: order === 'asc' ? 'desc' : 'asc',
    };
  }
}
