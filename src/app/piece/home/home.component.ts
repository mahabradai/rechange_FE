import { Component, OnInit } from '@angular/core';
import { Piece } from '../piece';
import { PieceService } from '../piece.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allPieces: Piece[] = [];
  deleteModal: any;
  idToDelete: number = 0;

  constructor(private pieceService: PieceService) {}

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get() {
    this.pieceService.get().subscribe((data: Piece[]) => {
      this.allPieces = data;
      console.log("data=",data);
    });
  }

  openDeleteModal(id: number) {
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.pieceService.delete(this.idToDelete).subscribe({
      next: (data) => {
        this.allPieces = this.allPieces.filter(p => p.id != this.idToDelete);
        this.deleteModal.hide();
      },
    });
  }
}
