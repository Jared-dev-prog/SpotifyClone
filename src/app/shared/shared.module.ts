import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';

@NgModule({
  declarations: [
    MediaPlayerComponent,
    HeaderUserComponent,
    SideBarComponent,
    CardPlayerComponent,
    SectionGenericComponent,
  ],
  imports: [CommonModule],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    SectionGenericComponent,
    CardPlayerComponent,
  ],
})
export class SharedModule {}
