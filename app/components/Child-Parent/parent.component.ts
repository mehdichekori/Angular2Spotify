import { childComponent } from './child.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'parent',
    templateUrl: 'parent.component.html',
    directives: [childComponent]
})

export class parentComponent {
    childValue:string;
 }

