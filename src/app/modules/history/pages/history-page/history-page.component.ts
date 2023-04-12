import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {
  listResult$: Observable<any> = of([]);
  constructor(private searchService: SearchService) {}

  receiveData(event: string): void {
    this.listResult$ = this.searchService.searchTracks$(event);
  }
}
