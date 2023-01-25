import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-onomatopia3',
  templateUrl: './create-onomatopia3.component.html',
  styleUrls: ['./create-onomatopia3.component.css']
})
export class CreateOnomatopiaComponent {
  newOnomatopia : string = '';
  @Output() sendOnomatopiaToParent : EventEmitter<string> = new EventEmitter();

  createOnomatopia() {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    //this.newOnomatopia = '';
  }
}