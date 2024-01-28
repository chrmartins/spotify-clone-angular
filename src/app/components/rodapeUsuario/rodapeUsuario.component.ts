import { Component, OnInit } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { IUsuario } from '../../interfaces/IUsuario';
import { SpotifyService } from '../../pages/services/spotify.service';

@Component({
  selector: 'app-rodapeUsuario',
  templateUrl: './rodapeUsuario.component.html',
  styleUrls: ['./rodapeUsuario.component.scss']
})
export class RodapeUsuarioComponent implements OnInit {

  sairIcone = faSignOut;

  usuario: IUsuario = null;

  constructor(private spotifyService: SpotifyService ) { }

  ngOnInit() {
    this.usuario = this.spotifyService.usuario;
  }

  logout() {
    this.spotifyService.logout();
  }

}
