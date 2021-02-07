import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  cursos:any[]=[
    {
    img:'../../../assets/contenidoGuitarra1.jpg'
    },
    {
      img:'../../../assets/contenidoGuitarra2.jpg'
    },
    {
      img:'../../../assets/contenidoGuitarra3.jpg',
    }
  ];

  constructor(private activated:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    const id=this.activated.snapshot.params.id;
    console.log(id);
  }

}
