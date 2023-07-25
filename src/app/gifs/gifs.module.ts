import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent, SearchBoxComponent, CardListComponent, CardsComponent],
  imports: [CommonModule,SharedModule],
  exports: [HomePageComponent, SearchBoxComponent,CardListComponent,CardsComponent],
})
export class GifsModule {}
