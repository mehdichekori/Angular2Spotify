import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component'
import { StylesComponent } from './components/styles/styles.component';
import { SpotifyService } from './services/spotify.service'
import { FormsModule } from '@angular/forms';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    directives:[ROUTER_DIRECTIVES,NavbarComponent,SearchComponent],
    precompile:[SearchComponent,StylesComponent],
    providers:[HTTP_PROVIDERS , SpotifyService, ]
})

export class AppComponent { }
