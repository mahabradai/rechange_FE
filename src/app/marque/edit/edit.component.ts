import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Marque} from '../marque';
import { MarqueService } from '../marque.service';
 
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  marqueForm: Marque = {
    id: 0,
    name: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private marqueService: MarqueService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.marqueService.getById(id).subscribe((data) => {
      this.marqueForm = data;
    });
  }
 
  update() {
    this.marqueService.update(this.marqueForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/marque/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}