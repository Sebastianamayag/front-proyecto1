import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  peliculas:any[]=[
    {name:'Frozen 2',
    img:'https://st3.depositphotos.com/5366154/13715/i/600/depositphotos_137155922-stock-photo-fire-letter-e-of-burning.jpg',
    desc:'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.'},
    {
      name:'The Irishman',
      img:'https://s1.1zoom.me/big3/471/Painting_Art_Back_view_Photographer_575380_3840x2400.jpg',
      desc:'Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.'
    }
  ];
  
  noticies:any[]=[
    {
      title:'Noticie 2',
      date:'27/01/2021',
      img:'http://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2019/11/cd-22_0000042_arpa_color.png',
      content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, enim eget rhoncus vestibulum, massa risus mollis leo, eu pulvinar ex ex in tellus. Quisque orci tellus, mattis at libero ac, cursus ornare tortor. Vivamus lorem purus, facilisis sit amet pretium vel, rhoncus at nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque blandit sagittis volutpat. Suspendisse potenti. Maecenas sit amet sem tellus. Maecenas elit ante, consectetur at eros eu, eleifend malesuada urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eget lacus quis libero vulputate ultrices rutrum et eros. Nam sagittis et dolor id consequat. Nullam vel tortor eget lectus interdum elementum non sollicitudin nisi. Nulla vehicula diam sed lorem dictum bibendum. Praesent non sodales elit.

      Nulla quis turpis malesuada, fringilla nisi non, vehicula nunc. Ut pellentesque, felis sit amet accumsan ultricies, felis est commodo arcu, sed aliquet arcu velit sed lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel bibendum libero. Suspendisse fermentum ligula nec dictum volutpat. Duis convallis massa diam, laoreet scelerisque risus placerat consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce erat nibh, scelerisque eget lacus non, blandit posuere nisi. In egestas, lectus eget elementum ornare, dui purus ornare enim, vel molestie ante erat at turpis. Ut non lorem vitae augue ultricies maximus. Proin vitae lacinia elit, a condimentum enim. Curabitur sollicitudin lacinia ornare. Aenean ac sem vehicula urna commodo consectetur et in lectus. Nam augue dolor, placerat vel gravida a, faucibus vel dui. Morbi risus metus, egestas at urna vitae, facilisis laoreet dui.
      
      Donec tellus libero, accumsan et elementum sit amet, tincidunt ut mauris. Integer porttitor diam lacus, vitae tincidunt tellus ultricies a. Praesent non tempor metus. Aenean tempus rutrum justo, et imperdiet tortor. Maecenas interdum odio a leo dapibus, eget hendrerit metus sagittis. Maecenas dapibus risus ac nunc consectetur dictum. Sed nisl quam, dictum sed gravida ut, pulvinar eget eros. Morbi vitae nibh erat. Morbi pulvinar quam ante, eget dapibus diam faucibus quis. Quisque vestibulum tempor pellentesque. Phasellus ac mattis nibh, et mollis nisi. Quisque metus diam, dictum vestibulum finibus a, tincidunt ac quam. Suspendisse congue condimentum facilisis. Phasellus at mi ac arcu tincidunt tristique.
      `,
    },{
      title:'Noticie 1',
      date:'27/01/2021',
      img:'https://www.mintic.gov.co/portal/604/articles-126509_foto_marquesina.jpg',
      content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, enim eget rhoncus vestibulum, massa risus mollis leo, eu pulvinar ex ex in tellus. Quisque orci tellus, mattis at libero ac, cursus ornare tortor. Vivamus lorem purus, facilisis sit amet pretium vel, rhoncus at nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque blandit sagittis volutpat. Suspendisse potenti. Maecenas sit amet sem tellus. Maecenas elit ante, consectetur at eros eu, eleifend malesuada urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eget lacus quis libero vulputate ultrices rutrum et eros. Nam sagittis et dolor id consequat. Nullam vel tortor eget lectus interdum elementum non sollicitudin nisi. Nulla vehicula diam sed lorem dictum bibendum. Praesent non sodales elit.

      Nulla quis turpis malesuada, fringilla nisi non, vehicula nunc. Ut pellentesque, felis sit amet accumsan ultricies, felis est commodo arcu, sed aliquet arcu velit sed lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel bibendum libero. Suspendisse fermentum ligula nec dictum volutpat. Duis convallis massa diam, laoreet scelerisque risus placerat consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce erat nibh, scelerisque eget lacus non, blandit posuere nisi. In egestas, lectus eget elementum ornare, dui purus ornare enim, vel molestie ante erat at turpis. Ut non lorem vitae augue ultricies maximus. Proin vitae lacinia elit, a condimentum enim. Curabitur sollicitudin lacinia ornare. Aenean ac sem vehicula urna commodo consectetur et in lectus. Nam augue dolor, placerat vel gravida a, faucibus vel dui. Morbi risus metus, egestas at urna vitae, facilisis laoreet dui.
      
      Donec tellus libero, accumsan et elementum sit amet, tincidunt ut mauris. Integer porttitor diam lacus, vitae tincidunt tellus ultricies a. Praesent non tempor metus. Aenean tempus rutrum justo, et imperdiet tortor. Maecenas interdum odio a leo dapibus, eget hendrerit metus sagittis. Maecenas dapibus risus ac nunc consectetur dictum. Sed nisl quam, dictum sed gravida ut, pulvinar eget eros. Morbi vitae nibh erat. Morbi pulvinar quam ante, eget dapibus diam faucibus quis. Quisque vestibulum tempor pellentesque. Phasellus ac mattis nibh, et mollis nisi. Quisque metus diam, dictum vestibulum finibus a, tincidunt ac quam. Suspendisse congue condimentum facilisis. Phasellus at mi ac arcu tincidunt tristique.
      `,
    },{
      title:'Noticie 3',
      date:'27/01/2021',
      img:'https://coronavirus.gob.mx/wp-content/uploads/2020/04/Comunicado-SSalud2-1200x700-1-1170x725.jpeg',
      content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, enim eget rhoncus vestibulum, massa risus mollis leo, eu pulvinar ex ex in tellus. Quisque orci tellus, mattis at libero ac, cursus ornare tortor. Vivamus lorem purus, facilisis sit amet pretium vel, rhoncus at nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque blandit sagittis volutpat. Suspendisse potenti. Maecenas sit amet sem tellus. Maecenas elit ante, consectetur at eros eu, eleifend malesuada urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eget lacus quis libero vulputate ultrices rutrum et eros. Nam sagittis et dolor id consequat. Nullam vel tortor eget lectus interdum elementum non sollicitudin nisi. Nulla vehicula diam sed lorem dictum bibendum. Praesent non sodales elit.

      Nulla quis turpis malesuada, fringilla nisi non, vehicula nunc. Ut pellentesque, felis sit amet accumsan ultricies, felis est commodo arcu, sed aliquet arcu velit sed lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel bibendum libero. Suspendisse fermentum ligula nec dictum volutpat. Duis convallis massa diam, laoreet scelerisque risus placerat consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce erat nibh, scelerisque eget lacus non, blandit posuere nisi. In egestas, lectus eget elementum ornare, dui purus ornare enim, vel molestie ante erat at turpis. Ut non lorem vitae augue ultricies maximus. Proin vitae lacinia elit, a condimentum enim. Curabitur sollicitudin lacinia ornare. Aenean ac sem vehicula urna commodo consectetur et in lectus. Nam augue dolor, placerat vel gravida a, faucibus vel dui. Morbi risus metus, egestas at urna vitae, facilisis laoreet dui.
      
      Donec tellus libero, accumsan et elementum sit amet, tincidunt ut mauris. Integer porttitor diam lacus, vitae tincidunt tellus ultricies a. Praesent non tempor metus. Aenean tempus rutrum justo, et imperdiet tortor. Maecenas interdum odio a leo dapibus, eget hendrerit metus sagittis. Maecenas dapibus risus ac nunc consectetur dictum. Sed nisl quam, dictum sed gravida ut, pulvinar eget eros. Morbi vitae nibh erat. Morbi pulvinar quam ante, eget dapibus diam faucibus quis. Quisque vestibulum tempor pellentesque. Phasellus ac mattis nibh, et mollis nisi. Quisque metus diam, dictum vestibulum finibus a, tincidunt ac quam. Suspendisse congue condimentum facilisis. Phasellus at mi ac arcu tincidunt tristique.
      `,
    },{
      title:'Noticie 4',
      date:'27/01/2021',
      img:'https://sites.google.com/site/intrumentosmusiclaes/_/rsrc/1541103443322/5-viento-metal/viento-metal.png',
      content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo, enim eget rhoncus vestibulum, massa risus mollis leo, eu pulvinar ex ex in tellus. Quisque orci tellus, mattis at libero ac, cursus ornare tortor. Vivamus lorem purus, facilisis sit amet pretium vel, rhoncus at nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque blandit sagittis volutpat. Suspendisse potenti. Maecenas sit amet sem tellus. Maecenas elit ante, consectetur at eros eu, eleifend malesuada urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eget lacus quis libero vulputate ultrices rutrum et eros. Nam sagittis et dolor id consequat. Nullam vel tortor eget lectus interdum elementum non sollicitudin nisi. Nulla vehicula diam sed lorem dictum bibendum. Praesent non sodales elit.

      Nulla quis turpis malesuada, fringilla nisi non, vehicula nunc. Ut pellentesque, felis sit amet accumsan ultricies, felis est commodo arcu, sed aliquet arcu velit sed lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam vel bibendum libero. Suspendisse fermentum ligula nec dictum volutpat. Duis convallis massa diam, laoreet scelerisque risus placerat consequat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce erat nibh, scelerisque eget lacus non, blandit posuere nisi. In egestas, lectus eget elementum ornare, dui purus ornare enim, vel molestie ante erat at turpis. Ut non lorem vitae augue ultricies maximus. Proin vitae lacinia elit, a condimentum enim. Curabitur sollicitudin lacinia ornare. Aenean ac sem vehicula urna commodo consectetur et in lectus. Nam augue dolor, placerat vel gravida a, faucibus vel dui. Morbi risus metus, egestas at urna vitae, facilisis laoreet dui.
      
      Donec tellus libero, accumsan et elementum sit amet, tincidunt ut mauris. Integer porttitor diam lacus, vitae tincidunt tellus ultricies a. Praesent non tempor metus. Aenean tempus rutrum justo, et imperdiet tortor. Maecenas interdum odio a leo dapibus, eget hendrerit metus sagittis. Maecenas dapibus risus ac nunc consectetur dictum. Sed nisl quam, dictum sed gravida ut, pulvinar eget eros. Morbi vitae nibh erat. Morbi pulvinar quam ante, eget dapibus diam faucibus quis. Quisque vestibulum tempor pellentesque. Phasellus ac mattis nibh, et mollis nisi. Quisque metus diam, dictum vestibulum finibus a, tincidunt ac quam. Suspendisse congue condimentum facilisis. Phasellus at mi ac arcu tincidunt tristique.
      `,
    }
  ];
  constructor(private _config:NgbCarouselConfig) {
    _config.interval=3000;
    _config.pauseOnHover=true;
    _config.showNavigationArrows=false;
   }

  ngOnInit(): void {
  }
}
