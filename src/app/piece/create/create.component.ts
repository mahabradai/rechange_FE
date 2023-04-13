import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piece } from '../piece';
import { PieceService } from '../piece.service';
import { TypeService } from 'src/app/type/type.service';
import { Type } from 'src/app/type/type';
import { Marque } from 'src/app/marque/marque';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  allTypes: Type[] = [];

  pieceForm: Piece = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    type: {
      id: 0,
      name: '',
      year: 0,
      marque: { id: 0, name: ''}
    }
  };

  constructor(
    private typeService: TypeService,
    private pieceService: PieceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('Entering create piece...');
    this.get();
  }

  get() {
    console.log('Get all types...');
    this.typeService.get().subscribe((data) => {
      this.allTypes = data;
      console.log('Data=', data);
    });
  }

  create() {
    console.log('Piece form:', this.pieceForm);
    this.pieceService.create(this.pieceForm).subscribe({
      next: (data) => {
        this.router.navigate(['/piece/home']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
