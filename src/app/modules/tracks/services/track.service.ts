import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TrackModel } from 'src/app/core/models/tracks.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {}

  getTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`);
  }
}