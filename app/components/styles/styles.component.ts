import { parentComponent } from './../Child-Parent/parent.component';
import { Component, OnInit } from '@angular/core';
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

    ngOnInit() {
        this.colors.push('Green','Purple','Blue','Black','Orange');
        this.backup = this.colors;
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

