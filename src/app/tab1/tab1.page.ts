import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50min',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação','Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores Ultimato (2019)',
      lancamento: '25/04/2019',
      duracao: '3h01min',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Ação', 'Ficção Científica','Aventura'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Doutor Estranho no Multiverso da Loucura (2022)',
      lancamento: '05/05/2022',
      duracao: '2h06min',
      classificacao: 4,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/boIgXXUhw5O3oVkhXsE6SJZkmYo.jpg',
      generos:  ['Ação', 'Ficção Científica','Aventura'],
      pagina: '/multiverso-loucura',
      favorito: false
    },
    {
      nome: 'Cruella (2021)',
      lancamento: '28/05/2021',
      duracao: '2h14min',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rRYNGhcAZlTfIUS7iFoF4H9iDbc.jpg',
      generos: ['Crime', 'Comédia','Aventura'],
      pagina: '/cruella',
      favorito: true
    },
    {
      nome: 'Top Gun: Maverick (2022)',
      lancamento: '26/05/2022',
      duracao: '2h11min',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg',
      generos: ['Ação','Drama'],
      pagina: '/top-gun-maverick',
      favorito: true
    }
  ];

}
