import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { PainelEsquerdoComponent } from '../../components/painelEsquerdo/painelEsquerdo.component';
import { BotaoMenuComponent } from '../../components/botaoMenu/botaoMenu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RodapeUsuarioComponent } from '../../components/rodapeUsuario/rodapeUsuario.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistaComponent } from '../../components/topArtista/topArtista.component';
import { PainelDireitoComponent } from '../../components/painelDireito/painelDireito.component';



@NgModule({
  declarations: [
    PlayerComponent,
    PainelEsquerdoComponent,
    BotaoMenuComponent,
    RodapeUsuarioComponent,
    HomeComponent,
    TopArtistaComponent,
    PainelDireitoComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(PlayerRotas)
  ],
})
export class PlayerModule { }
