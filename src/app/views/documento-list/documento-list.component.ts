import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documento-list',
  templateUrl: './documento-list.component.html',
  styleUrls: ['./documento-list.component.css']
})
export class DocumentoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  folders: Section[] = [
    {
      name: 'Fotos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Documentos',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Compartilhada',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Registro de eventos',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Contatos',
      updated: new Date('1/18/16'),
    }
  ];
}

export interface Section {
  name: string;
  updated: Date;
}