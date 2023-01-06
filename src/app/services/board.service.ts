import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards: Array<any> = [];

  constructor() {
    let str = localStorage.getItem('boards');
    if (str != null) {
      this.boards = JSON.parse(str);
    }
  }
  public crateBoard(title: any) {
    let newBoardsObj = { title: title, cards: [] }
    this.boards.push(newBoardsObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }
  public updateDataToLocaleStrage() {
    localStorage.setItem('boards', JSON.stringify(this.boards))
  }
  public deleteBoard(boardNumber: number) {
    this.boards.splice(boardNumber, 1);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }
}
