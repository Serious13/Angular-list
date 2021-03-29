import { Component, Output,EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'list-app';
  items = ['item1', 'item2', 'item3', 'item4'];
  
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  unselect() {

  }
}
