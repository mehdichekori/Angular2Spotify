import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/Artist';


@Component({
    moduleId:module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
    providers: [SpotifyService],
    directives: [ROUTER_DIRECTIVES]
})
export class SearchComponent { 
    searchStr: string;
    searchRes: Artist[];

    constructor(private _spotifyService:SpotifyService ){}

    searchMusic(search:string){
        this._spotifyService.searchMusic(search)
            .subscribe(res => {
                this.searchRes = (res.artists.items)
            })
    }
}
