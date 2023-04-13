import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Piece } from '../piece';
import { PieceService } from '../piece.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  pieceForm: Piece = {
    id: 0,
    name: '',
    price: 0,
    quantity: 0,
    type : {
      id: 0,
      name: '',
      year: 0,
      marque: { id: 0, name: ''}
    }
  };

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private pieceService: PieceService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.pieceService.getById(id).subscribe((data) => {
      this.pieceForm = data;
    });
  }
 
  update() {
    this.pieceService.update(this.pieceForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/piece/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
