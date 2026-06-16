import { Component } from '@angular/core';

interface Categoria {
  id: number;
  nombre: string;
  descripcion: string;
  libros: number;
  icono: string;
  color: string;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent {
  categorias: Categoria[] = [
    {
      id: 1,
      nombre: 'Ficción',
      descripcion: 'Novelas, historias y narrativas imaginativas que transportan al lector a mundos fascinantes.',
      libros: 245,
      icono: '📖',
      color: '#667eea'
    },
    {
      id: 2,
      nombre: 'No Ficción',
      descripcion: 'Libros sobre hechos reales, historia, biografía y conocimientos prácticos.',
      libros: 189,
      icono: '📚',
      color: '#764ba2'
    },
    {
      id: 3,
      nombre: 'Misterio y Thriller',
      descripcion: 'Historias de suspenso, crimen y misterio que mantienen al lector en la orilla del asiento.',
      libros: 156,
      icono: '🔍',
      color: '#f093fb'
    },
    {
      id: 4,
      nombre: 'Fantasía',
      descripcion: 'Mundos mágicos, aventuras épicas y personajes extraordinarios más allá de la realidad.',
      libros: 178,
      icono: '🐉',
      color: '#4facfe'
    },
    {
      id: 5,
      nombre: 'Romance',
      descripcion: 'Historias de amor, relaciones y emociones que tocan el corazón del lector.',
      libros: 134,
      icono: '💕',
      color: '#fa709a'
    },
    {
      id: 6,
      nombre: 'Ciencia Ficción',
      descripcion: 'Mundos futuros, tecnología avanzada y exploración de posibilidades científicas.',
      libros: 167,
      icono: '🚀',
      color: '#30cfd0'
    },
    {
      id: 7,
      nombre: 'Infantil',
      descripcion: 'Libros diseñados especialmente para niños con historias educativas y entretenidas.',
      libros: 289,
      icono: '👶',
      color: '#a8edea'
    },
    {
      id: 8,
      nombre: 'Poesía',
      descripcion: 'Versos, poemas y obras literarias que expresan sentimientos y emociones profundas.',
      libros: 98,
      icono: '✨',
      color: '#fed6e3'
    }
  ];

  obtenerTotalLibros(): number {
    return this.categorias.reduce((sum, c) => sum + c.libros, 0);
  }
}
