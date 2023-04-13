import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Type } from '../type';
import { TypeService } from '../type.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
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
    private typeService: TypeService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number) {
    this.typeService.getById(id).subscribe((data) => {
      this.typeForm = data;
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
