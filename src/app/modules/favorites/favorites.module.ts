import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FavoritesPageComponent],
  imports: [CommonModule, FavoritesRoutingModule, SharedModule],
})
export class FavoritesModule {}
