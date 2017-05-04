import { parentComponent } from './../Child-Parent/parent.component';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as _ from "lodash";

@Component({
    moduleId:module.id,
    selector: 'styles',
    templateUrl: 'styles.component.html',
    directives: [parentComponent]
})

export class StylesComponent implements OnInit {
    color = 'black';
    size = 16;
    colors = Array<string>();
    backup = Array<string>();
    ticks = 0;
    c = 0;

    ngOnInit() {
        this.colors.push('Green','Purple','Blue','Black','Orange');
        this.backup = this.colors;

        // let timer = Observable.timer(0,1000);
        // timer.subscribe(t=>this.ticks = t);
        setInterval(() => {
            this.ticks = (new Date().getTime()/1000- new Date("2017-05-04:12:45:00Z").getTime()/1000)
            
            this.hh = Math.floor(this.ticks / 3600);
            this.leftover = this.ticks % 3600;
            this.mm = Math.floor(this.leftover/ 60);
            this.ss = (this.ticks % 60).toFixed(0);
            this.c = this.ticks * 0.005555555555555555;
        //console.log(this.hh+'h'+this.mm+'m'+this.ss+'s',this.c.toFixed(2)+'$');     
     }, 1000);
    }
    changeColor(col:string){
        this.color = col;
    }

    removeLastOfArray(){
        this.colors=_.dropRight(this.colors);
    }

    resetArray(){
        this.colors = this.backup;
    }
 }

