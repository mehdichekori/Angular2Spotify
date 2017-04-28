import { provideRouter, RouterConfig } from '@angular/router';
import { StylesComponent } from './components/styles/styles.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

const routes: RouterConfig = [
    {path:'', component: SearchComponent},
    {path:'styles', component: StylesComponent},
    {path:'artist/:id', component: ArtistComponent},
    {path:'album/:id', component:AlbumComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];