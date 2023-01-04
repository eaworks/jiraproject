import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-boards-dialog',
  templateUrl: './boards-dialog.component.html',
  styleUrls: ['./boards-dialog.component.scss']
})
export class BoardsDialogComponent {
  boardForm = new FormGroup({
    title: new FormControl(null, [Validators.required])
  })

}
