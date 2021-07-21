import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from 'src/app/domain/recetas';
import { RecetasService } from 'src/app/service/recetas.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  receta : Receta = new Receta()

  constructor(private router: Router, private recetasService : RecetasService) { }

  ngOnInit() {
  }

  guardar() {
    console.log(this.receta)
    
    this.recetasService.save(this.receta)
    this.router.navigate(['list'])
  }

}
