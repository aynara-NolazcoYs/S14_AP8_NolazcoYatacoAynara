import { Component } from '@angular/core';

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  categoria: string;
  anio: number;
  descripcion: string;
  imagen: string;
  disponible: boolean;
}

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros: Libro[] = [
    {
      id: 1,
      titulo: 'Don Quijote',
      autor: 'Miguel de Cervantes',
      categoria: 'Clásicos',
      anio: 1605,
      descripcion: 'La novela más importante de la literatura española y una de las mejores obras de la literatura universal.',
      imagen: 'assets/images/libros/Don.jpeg',
      disponible: true
    },
    {
      id: 2,
      titulo: 'Cien años de soledad',
      autor: 'Gabriel García Márquez',
      categoria: 'Realismo Mágico',
      anio: 1967,
      descripcion: 'Un viaje a través de Macondo, un pueblo mágico y lleno de misterios donde viven los Buendía.',
      imagen: 'assets/images/libros/CienS.jpeg',
      disponible: true
    },
    {
      id: 3,
      titulo: 'El Quijote de la Mancha',
      autor: 'Miguel de Cervantes',
      categoria: 'Aventura',
      anio: 1605,
      descripcion: 'Las aventuras del ingenioso hidalgo Don Quijote y su escudero Sancho Panza.',
      imagen: 'assets/images/libros/Don.jpeg',
      disponible: false
    },
    {
      id: 4,
      titulo: '1984',
      autor: 'George Orwell',
      categoria: 'Ficción Política',
      anio: 1949,
      descripcion: 'Una distopía sobre un régimen totalitario de control absoluto.',
      imagen: 'assets/images/libros/1984.jpeg',
      disponible: true
    },
    {
      id: 5,
      titulo: 'Pride and Prejudice',
      autor: 'Jane Austen',
      categoria: 'Romance',
      anio: 1813,
      descripcion: 'La historia de Elizabeth Bennet y el orgulloso Mr. Darcy en la sociedad inglesa.',
      imagen: 'assets/images/libros/jyp.jpeg',
      disponible: true
    },
    {
      id: 6,
      titulo: 'El Hobbit',
      autor: 'J.R.R. Tolkien',
      categoria: 'Fantasía',
      anio: 1937,
      descripcion: 'La aventura de Bilbo Bolsón en la Tierra Media.',
      imagen: 'assets/images/libros/hobbit-book.jpeg',
      disponible: true
    }
  ];

  obtenerLibrosDisponibles(): number {
    return this.libros.filter(l => l.disponible).length;
  }

  obtenerLibrosPrestados(): number {
    return this.libros.filter(l => !l.disponible).length;
  }

  obtenerClaseDisponibilidad(disponible: boolean): string {
    return disponible ? 'disponible' : 'no-disponible';
  }

  obtenerTextoDisponibilidad(disponible: boolean): string {
    return disponible ? 'Disponible' : 'No Disponible';
  }
}
