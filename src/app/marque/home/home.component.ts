import { Component, OnInit } from '@angular/core';
import { Marque } from '../marque';
import { MarqueService } from '../marque.service';
 
declare var window: any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allMarques: Marque[] = [];
  deleteModal: any;
  idTodelete: number = 0;

  constructor(private marqueService: MarqueService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
    this.get();
  }
 
  get() {
    this.marqueService.get().subscribe((data) => {
      this.allMarques = data;
      console.log("data=",data) ; 

    });
  }
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
  delete() {
    this.marqueService.delete(this.idTodelete).subscribe({
        next: (data) => {
            this.allMarques = this.allMarques.filter(_ => _.id != this.idTodelete)
            this.deleteModal.hide();
        },
    });
}

}