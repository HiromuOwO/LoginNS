import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {

  searchText: string = '';

  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(): void {
    this.searchTextChanged.emit(this.searchText);
  }
}
