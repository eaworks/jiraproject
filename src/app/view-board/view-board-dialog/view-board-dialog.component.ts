import { Component, Inject, inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.scss']
})
export class ViewBoardDialogComponent implements OnInit {

  private dialogRef = inject(MatDialogRef<ViewBoardDialogComponent>);
  private _snackBar = inject(MatSnackBar);
  public data: any = inject(MAT_DIALOG_DATA);
  public boardService = inject(BoardService);
  title: string = "";
  tasks: Array<string> = [""];
  tasksLoop: any = [false];
  ngOnInit(): void {
    let a = this.data;
  }
  deleteTask(i: number) { }
  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }
  close() {
    this.dialogRef.close();
  }
  create() {
    if (this.tasks.some((element: string) => element === "")) {
      this._snackBar.open("Yeni Taski Giriniz", "Ok");
    } else {
      this.boardService.boards[this.data.boardIndex].cards.push({
        title: this.title,
        checklist: this.tasks,
        status: this.tasksLoop,
      });
      this.boardService.updateDataToLocaleStrage();
      this.close();
    }
  }

}
