import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../models/character.model';
import { MatDialog } from '@angular/material/dialog';

import { DetallesComponent } from '../detalles/detalles.component';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {
  characters: any[] = []; 
  filteredCharacters: Character[] = [];
  allCharacters: Character[] = [];

  

  p: number = 1;

  constructor(private characterService: CharacterService, private dialog: MatDialog) {} 

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((data) => {
      this.allCharacters = data.results; // Guarda todos los personajes
      this.filteredCharacters = this.allCharacters; // Inicialmente muestra todos
    });
  }

  
 


searchText: string = '';

applyFilters(): void {
  this.filteredCharacters = this.allCharacters.filter((character) => {
    const matchesSearch = this.searchText
      ? character.name.toLowerCase().includes(this.searchText.toLowerCase())
      : true;
    return matchesSearch;
  });
}
    
onSearchTextChanged(newSearchText: string): void {
  this.searchText = newSearchText;
  this.applyFilters();
}


openModal(character: any): void {
  this.dialog.open(DetallesComponent, {
    data: character,
    
  });
}


borrarCharacter(characterId: number): void {
  
  const confirmDelete = confirm('¿Estás seguro de que deseas eliminar este personaje?');
  if (confirmDelete) {
    
    this.filteredCharacters = this.filteredCharacters.filter(character => character.id !== characterId);
    alert('Personaje eliminado exitosamente.');
  }
}


actualizarCharacter(character: any): void {
  
  const updatedName = prompt('Actualizar nombre:', character.name);
  const updatedSpecies = prompt('Actualizar especie:', character.species);
  const updatedStatus = prompt('Actualizar estado:', character.status);

  if (updatedName && updatedSpecies && updatedStatus) {
    character.name = updatedName;
    character.species = updatedSpecies;
    character.status = updatedStatus;
    alert('Personaje actualizado exitosamente.');
  }
}
}

