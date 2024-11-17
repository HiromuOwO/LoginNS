import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
})
export class FormFieldComponent {
  hide = signal(true);

  ocultar = signal(false);

  mostrar() {
    this.ocultar.update((value) => !value);
  }
}
