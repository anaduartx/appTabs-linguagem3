import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ISerie } from '../model/ISerie';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaSeries: ISerie[] = [
    {
      nome: 'Stranger Things (2016)',
      lancamento: '15/07/2016',
      temporadas: 4,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49WJfeN0moxb9IPfGn8AIqMGskD.jpg',
      generos: ['Drama','Mistério','Ficção Científica'],
      pagina: '/stranger-things',
      favorito: false
    },
    {
      nome: 'Wandavision (2021)',
      lancamento: '15/01/2021',
      temporadas: 1,
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cm5xwxoWl2ZWuCKzwa0umHHsbmI.jpg',
      generos: ['Drama','Mistério','Ficção Científica'],
      pagina: '/wandavision',
      favorito: true
    },
    {
      nome: "Grey's Anatomy (2005)",
      lancamento: '27/03/2005',
      temporadas: 18,
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tWtGNTJUAuiM2O9wv0jejw45Sji.jpg',
      generos:  ['Drama', 'Médico'],
      pagina: '/greys-anatomy',
      favorito: false
    },
    {
      nome: 'Only Murders in the Building (2021)',
      lancamento: '31/08/2021',
      temporadas: 2,
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4aLjpLklvyu9JGLVljFNZCc4Kc5.jpg',
      generos: ['Crime', 'Comédia','Mistério'],
      pagina: '/murders-building',
      favorito: true
    },
    {
      nome: 'Friends (1994)',
      lancamento: '22/09/1994',
      temporadas: 10,
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f496cm9enuEsZkSPzCwnTESEK5s.jpg',
      generos: ['Comédia','Drama'],
      pagina: '/friends',
      favorito: true
    }
  ];

  exibirSerie(serie: ISerie){
    const navigationExtras: NavigationExtras = {state:{paramFilme:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }
  async exibirAlertaFavorito(serie: ISerie) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Série adicionada aos favoritos!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
