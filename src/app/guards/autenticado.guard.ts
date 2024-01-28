import { inject } from '@angular/core';
import { Router, type CanActivateChildFn } from '@angular/router';
import { SpotifyService } from '../pages/services/spotify.service';


export const autenticadoGuard: CanActivateChildFn = () => {
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);

  const token = localStorage.getItem('token');

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const naoAutenticado = () => {
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  };

  return new Promise(async (resolve) => {
    const usuarioCriado = await spotifyService.inicializarUsuario();
    if (usuarioCriado) resolve(true);
    else resolve(naoAutenticado());
  });

};
