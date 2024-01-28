import { Injectable } from '@angular/core';
import { IMusica } from '../../interfaces/IMusica';
import { BehaviorSubject } from 'rxjs';
import { newMusica } from '../../common/factories';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

musicaAtual = new BehaviorSubject<IMusica>(newMusica());

constructor() { }

}
