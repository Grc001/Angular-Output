import { Component } from '@angular/core';

@Component({
  selector: 'app-onolist',
  templateUrl: './onolist.component.html',
  styleUrls: ['./onolist.component.css']
})
export class OnolistComponent {
  onomatopiaList : string[] = [];

  onReceiveNewOnomatopia(event : string) : void {
    this.onomatopiaList.push(event);
  }
}
