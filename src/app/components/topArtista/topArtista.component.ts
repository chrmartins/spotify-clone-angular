import { Component, OnInit } from '@angular/core';
import { IArtista } from '../../interfaces/IArtista';
import { SpotifyService } from '../../pages/services/spotifyService';
import { newArtista } from '../../common/factories';

@Component({
  selector: 'app-topArtista',
  templateUrl: './topArtista.component.html',
  styleUrls: ['./topArtista.component.scss']
})
export class TopArtistaComponent implements OnInit {

  topArtista: IArtista = newArtista();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.buscarArtista();
  }

  async buscarArtista(){
    const artistas = await this.spotifyService.buscarTopArtistas(1);

    if (!!artistas)
      this.topArtista = artistas.pop();
  }

}
