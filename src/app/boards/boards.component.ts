import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BoardsDialogComponent } from './boards-dialog/boards-dialog.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {
  constructor(private matDialog: MatDialog) { }
  ngOnInit(): void {
  }
  openNewBoardDialog() {
    const dialogRef = this.matDialog.open(BoardsDialogComponent, {
      width: '500px'
    })
  }

}
