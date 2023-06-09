import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../type';
import { TypeService } from '../type.service';
import { Marque } from 'src/app/marque/marque';
import { MarqueService } from 'src/app/marque/marque.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  allMarques: Marque[] = [];

  typeForm: Type = {
    id: 0,
    name: '',
    year: 0,
    marque: {
      id: 0,
      name: ''
    }
  };
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private typeService: TypeService , 
    private marqueService : MarqueService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      this.getMarques () ;
    });
  }

  getById(id: number) {
    this.typeService.getById(id).subscribe((data) => {
      this.typeForm = data;
    });
  }

   getMarques () {
    console.log("get all marques...");

    this.marqueService.getAll().subscribe((data) => {
      this.allMarques = data;
      console.log("data=", data); 
    });

   }



  update() {
    this.typeService.update(this.typeForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/type/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}