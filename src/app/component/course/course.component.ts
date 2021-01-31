import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
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

  constructor(private activated:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const id=this.activated.snapshot.params.id;
    console.log(id);
  }

}
