import { Component, OnInit } from '@angular/core';
import { Datum } from 'src/app/interface/interdace';
import { Usuario } from 'src/app/models/usuario.models';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(public usuarioService:UsuarioService) { }
  usuarios!:Datum[];
  ngOnInit(){
    this.usuarioService.getUsers().subscribe(users=>{
      console.log(users);
      this.usuarios=users;
    })
  }

}
