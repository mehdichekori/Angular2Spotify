import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'child',
    templateUrl: 'child.component.html'
})

export class childComponent {
    @Input('passedValue')  parentValue:string;
    @Output() childChanged = new EventEmitter<string>();

    onChange(value:string){
        this.childChanged.emit(value);
    }
 }

