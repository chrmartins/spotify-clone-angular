import { Component, OnInit } from '@angular/core';
import { IMusica } from '../../interfaces/IMusica';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { newMusica } from '../../common/factories';
import { Subscription } from 'rxjs';
import { SpotifyService } from '../services/spotifyService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  musicas: IMusica[] = []
  musicaAtual: IMusica = newMusica();

  subs: Subscription[] = [];

  // IconePlay
  playIcone = faPlay;

  constructor(
    private spotifyService: SpotifyService,
    //private playerService: PlayerService
  ) { }

  ngOnInit(): void {
    // this.obterMusicas();
    // this.obterMusicaAtual();
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  // async obterMusicas() {
  //   this.musicas = await this.spotifyService.buscarMusicas()
  // }

  // obterMusicaAtual(){
  //   const sub = this.playerService.musicaAtual.subscribe(musica => {
  //     this.musicaAtual = musica;
  //   });

  //   this.subs.push(sub);
  // }

  obterArtistas(musica: IMusica){
    return musica.artistas.map(artista => artista.nome).join(', ');
  }

  // async executarMusica(musica: IMusica){
  //   await this.spotifyService.executarMusica(musica.id);
  //   this.playerService.definirMusicaAtual(musica);
  // }

}
