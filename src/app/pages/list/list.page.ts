import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { RecetasService } from 'src/app/service/recetas.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  recetas : any
  aux : string

  constructor(private router: Router, private activate: ActivatedRoute, private recetasService : RecetasService) { }

  ngOnInit() {
    this.recetas = this.recetasService.getRecetas();
  }

  crear(){

    this.router.navigate(['create'])
  }

  search(){

    let params: NavigationExtras = {
      queryParams: {
        aux:this.aux
      }
    }

    this.router.navigate(['result'], params)
  }

  show(receta:any) {
    let params: NavigationExtras = {
      queryParams: {
        receta:receta
      }
    }

    this.router.navigate(['show'], params)
  }

}
