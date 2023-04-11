import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';



@NgModule({
  declarations: [
    MediaPlayerComponent,
    HeaderUserComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
