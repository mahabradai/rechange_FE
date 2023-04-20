import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Type } from '../type';
import { TypeService } from '../type.service';
import { MarqueService } from 'src/app/marque/marque.service';
import { Marque } from 'src/app/marque/marque';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
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
    private marqueService: MarqueService,
    private router: Router,
    private typeService: TypeService , 
    
  ) {}

  ngOnInit(): void {
    console.log("Entering create type...");
    this.get(); // call get() method to populate allMarques on component initialization
  }

  get() {
    console.log("get all marques...");

    this.marqueService.getAll().subscribe((data) => {
      this.allMarques = data;
      console.log("data=", data); 
    });

  }

  create() {
    console.log("typeform :", this.typeForm);
    this.typeService.create(this.typeForm).subscribe({
      next: (data) => {
        this.router.navigate(["/type/home"]);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}