import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  matDialog = inject(MatDialog);
  boardIndex: any = 0;
  boardTitle: string = "";
  constructor(private route: ActivatedRoute, public boardService: BoardService) { }
  ngOnInit(): void {
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardTitle = this.boardService.boards[this.boardIndex].title;
  }
  openNewCardDialog() {
    const dialogRef = this.matDialog.open(ViewBoardDialogComponent, {
      width: '500px',
      data: { boardIndex: this.boardIndex }
    })
  }

}
