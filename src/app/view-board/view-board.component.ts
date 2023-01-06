import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../services/board.service';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.scss']
})
export class ViewBoardComponent implements OnInit {
  boardIndex: any = 0;
  boardTitle: string = "";
  constructor(private route: ActivatedRoute, public boardService: BoardService) { }
  ngOnInit(): void {
    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardTitle = this.boardService.boards[this.boardIndex].title;
  }
  openNewCardDialog() { }

}
