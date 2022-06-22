import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { IAtor } from '../model/IAtor';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router: Router, public alertController: AlertController, public toastController: ToastController) {}

  listaAtores: IAtor[] = [
    {
      nome: 'Tom Holland',
      local: 'Kingston Upon-Thames, Inglaterra, Reino Unido',
      idade: 26,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9jiQFMw_GDJcufjM2ocQm4iXqltKzRNBZBuwi4SXIq5Yi9zLeZImGn8uwFYhjqLZQTxc&usqp=CAU',
      trabalhos: ['Homem-Aranha: De Volta ao Lar','Vingadores Guerra Infinita','Homem-Aranha: Sem Volta para Casa'],
      pagina: '/tom-holland',
      favorito: true
    },
    {
      nome: 'Zendaya',
      local: 'Oakland, Califórnia, EUA',
      idade: 25,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6TE2AlOUqcrs7CyJiWYgodmee1r.jpg',
      trabalhos: ['Euphoria','Homem-Aranha: Sem Volta para Casa','Duna: Parte 1'],
      pagina: '/zendaya',
      favorito: true
    },
    {
      nome: 'Florence Pugh',
      local: 'Oxford, Inglaterra, Reino Unido',
      idade: 26,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fGx68Qen1SEHFA9CGW3miCjRDBW.jpg',
      trabalhos: ['Viúva Negra','Adoráveis Mulheres','Midsommar'],
      pagina: '/florence-pugh',
      favorito: false
    },
    {
      nome: 'Emma Stone',
      local: 'Scottsdale, Arizona, EUA',
      idade: 33,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eWjkPYeXxPhE2F9J3Ui6E9OWVXy.jpg',
      trabalhos: ['La La Land','Cruella','O Espetacular Homem-Aranha'],
      pagina: '/emma-stone',
      favorito: false
    },
    {
      nome: 'Andrew Garfield',
      local: 'Los Angeles, California, EUA',
      idade: 38,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/beO5YvbTjrr5yy8hW26KVDMSr35.jpg',
      trabalhos: ['O Espetacular Homem-Aranha','Homem-Aranha: Sem Volta para Casa','A Rede Social'],
      pagina: '/andrew-garfield',
      favorito: false
    }
  ];

  exibirAtor(ator: IAtor){
    const navigationExtras: NavigationExtras = {state:{paramFilme:ator}};
    this.router.navigate(['ator-detalhe'],navigationExtras);
  }
  async exibirAlertaFavorito(ator: IAtor) {
    const alert = await this.alertController.create({
      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos!',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
