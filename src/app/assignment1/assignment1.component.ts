import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css']
})
export class Assignment1Component implements OnInit {
  id: number = 0;
  name!: string;
  comment!: string;
  status: boolean = true; // status for Delete or Show ; true==show && false==Delete
  displayEditComment!: boolean; // hide or show EditBoxComment true==show && false==hide

  comments: CommentsBox[] = [];
  idNewComment!: number; // Keep Id NewComment from child component( comment )
  

  //Fucntion ------------------
  //from Btn-Comment
  pushValue(){
    this.comments.push({
      i: this.id++,
      n: this.name,
      c: this.comment,
      st: this.status,
      ds: this.displayEditComment,
    });
  }

  //from Btn-Clear
  clearValue(){
    this.name = '';
    this.comment = '';
  }

  //from Btn-Delete
  delEventParent(id: number){ // resieve id: number
    for(let comment of this.comments) {
      if(comment.i === id){
        comment.st = false; //Delete Comment
      }
    }
  }

  //from Btn-Edit
  editEventParent(newComment: any){ //recieve 2value (id:number && newComment: string)
    //id: number
    if(typeof(newComment)==="number"){
      this.idNewComment = newComment; // id
    }
    //comment: string
    if(typeof(newComment)==="string"){
      for(let comment of this.comments){
        if(comment.i === this.idNewComment){
          comment.c = newComment; //push newComment
          comment.ds = false; // hide edit Box Comment
        }
      }
    }
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}

interface CommentsBox {
  i: number; // id
  n: string; // name
  c: string; // comment
  st: boolean; // status
  ds: boolean; // Display or Hide EditComment
}
