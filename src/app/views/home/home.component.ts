import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CadastroUsuarioDialogComponent } from '../dialogs/cadastro-usuario-dialog/cadastro-usuario-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  
  openDialog() {
    const dialogRef = this.dialog.open(CadastroUsuarioDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  closeDialog(){
    this.dialog.closeAll();
  }
  ngOnInit(): void {
  }
}
