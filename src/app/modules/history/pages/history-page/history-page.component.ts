import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from 'src/app/core/models/tracks.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {
  listResult: TrackModel[] = [];
  constructor(private searchService: SearchService) {}

  receiveData(event: string): void {
    this.searchService.searchTracks$(event).subscribe(({ data }) => {
      this.listResult = data;
    });
  }
}
