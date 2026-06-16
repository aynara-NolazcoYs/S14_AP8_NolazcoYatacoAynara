import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'Bienvenidos a tu Biblioteca Digital';
  description = 'Encuentra tu próximo libro favorito.';
  features = [
    { icon: '📖', title: 'Amplio Catálogo', description: 'Miles de libros en múltiples géneros' },
    { icon: '🔍', title: 'Búsqueda Avanzada', description: 'Encuentra libros por autor, categoría o título' },
    { icon: '⭐', title: 'Recomendaciones', description: 'Descubre libros basados en tus preferencias' },
    { icon: '📱', title: 'Acceso Digital', description: 'Lee desde cualquier dispositivo' }
  ];
}
