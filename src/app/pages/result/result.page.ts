import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from 'src/app/service/recetas.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {

  recetas : any
  aux : string

  constructor(private router: Router, private activate: ActivatedRoute, private recetasService : RecetasService) {
    activate.queryParams.subscribe(params => {
      this.aux = params.aux
    })
   }

  ngOnInit() {
    console.log(this.aux)
    this.recetas = this.recetasService.filterRecetas(this.aux);
  }



}
