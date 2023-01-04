import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.scss']
})
export class BoardsDialogComponent {
  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  })
  constructor(private dialogRef: MatDialogRef<BoardsDialogComponent>, private boardService: BoardService) { }
  create() {
    this.boardService.crateBoard(this.boardForm.get('title')?.value);
  }
  close() {
    this.dialogRef.close();
  }

}
