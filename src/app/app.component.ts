import { Component } from '@angular/core';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuarioArray: Usuario[] = [
    { id: 1, nombre: "Jaime", cargo: "Informatico" },
    { id: 2, nombre: "Luka", cargo: "Informatico" }
  ];

  createUsuario: Usuario = new Usuario();

  agregar() {
    if (this.createUsuario.id === 0) {
      this.createUsuario.id = this.usuarioArray.length + 1;
      this.usuarioArray.push(this.createUsuario);
    }
    this.createUsuario = new Usuario();
  }

  editar(usuario: Usuario) {
    this.createUsuario = usuario;
  }

  eliminar() {
    if (confirm('Eliminar, estas Seguro?')) {
      this.usuarioArray = this.usuarioArray.filter(x => x != this.createUsuario);
      this.createUsuario = new Usuario();
    }
  }

} 
