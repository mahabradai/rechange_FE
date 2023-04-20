import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Piece } from '../piece';
import { PieceService } from '../piece.service';
import { Type } from 'src/app/type/type';
import { TypeService } from 'src/app/type/type.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  allTypes: Type[] = [];

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
    private router: Router,
    private pieceService: PieceService ,
    private typeService: TypeService 
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
      this.getTypes();
    });
  }
  
  getTypes() {
    console.log("get all types...");

    this.typeService.getAll().subscribe((data: Type[]) => {
      this.allTypes = data;
      console.log("data=", data); 
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
      next: (data) => {
        this.router.navigate(['/piece/home']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
