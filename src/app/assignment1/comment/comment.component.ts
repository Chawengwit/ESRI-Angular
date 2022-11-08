import { InvokeFunctionExpr, outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() name!: string;
  @Input() comment!: string;
  @Input() id!: number;
  @Input() display: boolean = false; // Display comment or Delete

  @Output() deleteEvent = new EventEmitter<number>(); //id comment delete
  @Output() editIdEvent = new EventEmitter<number>(); //id comment edit
  @Output() newComment = new EventEmitter<string>(); //new comment

  constructor() { }

  ngOnInit(): void {
  }

  // Function ------------------

  //from Btn-Edit
  editBtnFunc(){
    this.display = true; //for show Edit-Comment-Box
  }

  //from Btn-Done
  editComment(value: string){
    this.editIdEvent.emit(this.id); // send id: number to Parent-Component ( assignment1 )
    this.newComment.emit(value); // send newComment: string to Parent-Comp.

    this.display = false; // for hide Edit-Comment-Box
  }

  //from Btn-Delete
  deleteEventFunc(){
    this.deleteEvent.emit(this.id); //send id: number to Parent-Component ( assignment1 )
  }
}
