import { Component, OnInit } from '@angular/core';
import { Type } from '../type';
import { TypeService } from '../type.service';
 
declare var window: any;
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  allTypes: Type[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private typeService: TypeService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.typeService.getAll().subscribe((data) => {
      this.allTypes = data;
      console.log("data=",data) ; 
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.typeService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allTypes = this.allTypes.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}   