import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  public boards: Array<any> = [];

  constructor() { }
  public crateBoard(title: any) {
    let newBoardsObj = { title: title, cards: [] }
    this.boards.push(newBoardsObj);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }
}
