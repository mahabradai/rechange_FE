import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Marque } from '../marque';
import { MarqueService } from '../marque.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  marqueForm: Marque = {
    id: 0,
    name: '',
    };
 
  constructor(private marqueService: MarqueService,
              private router: Router) {}
 
  ngOnInit(): void {}
 
  create() {
    this.marqueService.create(this.marqueForm)
      .subscribe({
        next: (data) => {
          this.router.navigate(['/marque/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
