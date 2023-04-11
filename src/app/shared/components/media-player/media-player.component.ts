import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  public mockCover: any = {
    cover:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLa1d1eduIxSukKCItfJJqzIK3Ab0pTj4_fw&usqp=CAU',
    album: 'Gioli & Assia',
    name: 'BEBE (Oficial)',
  };
}
