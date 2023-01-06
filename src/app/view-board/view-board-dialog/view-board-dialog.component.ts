import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.scss']
})
export class ViewBoardDialogComponent {
  dialogRef = inject(MatDialogRef<ViewBoardDialogComponent>)
  title: string = "";
  tasks: Array<string> = [""];
  tasksLoop: any = [false];
  deleteTask(i: number) { }
  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }
  close() {
    this.dialogRef.close();
  }

}
