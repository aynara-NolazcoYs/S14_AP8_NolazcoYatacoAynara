import { Component } from '@angular/core';

interface ContactInfo {
  icono: string;
  titulo: string;
  contenido: string;
}

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  // Información de contacto
  contactInfo: ContactInfo[] = [
    {
      icono: '📍',
      titulo: 'Dirección',
      contenido: 'Calle del Libro 123, 28001 Madrid, España'
    },
    {
      icono: '📞',
      titulo: 'Teléfono',
      contenido: '+34 91 234 5678'
    },
    {
      icono: '📧',
      titulo: 'Email',
      contenido: 'info@bibliotecadigital.es'
    },
    {
      icono: '🕒',
      titulo: 'Horario',
      contenido: 'Lun-Vie: 9:00-20:00 | Sab-Dom: 10:00-18:00'
    }
  ];

  // Datos del formulario
  formulario = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  enviado = false;

  enviarFormulario() {
    if (this.formulario.nombre && this.formulario.email && this.formulario.asunto && this.formulario.mensaje) {
      this.enviado = true;
      // Resetear formulario
      this.formulario = {
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      };
      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        this.enviado = false;
      }, 3000);
    }
  }

  limpiarFormulario() {
    this.formulario = {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    };
  }
}
