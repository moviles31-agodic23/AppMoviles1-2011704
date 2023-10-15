import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  tarjetas: any[] = [{
    nombre: 'Angel Francisco Hernandez G.',
    numero: '4519 5133 0799 0830',
    mes : '08',
    year: 27
},
{
  nombre: 'Angel Francisco Hernandez G.',
  numero: '4519 5133 0799 0830',
  mes : '08',
  year: 27
},
{
  nombre: 'Angel Francisco Hernandez G.',
  numero: '4519 5133 0799 0830',
  mes : '08',
  year: 27
},
{
  nombre: 'Angel Francisco Hernandez G.',
  numero: '4519 5133 0799 0830',
  mes : '08',
  year: 27
}]
}
