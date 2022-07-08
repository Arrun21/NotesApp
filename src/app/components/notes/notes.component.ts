import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  todos: Todo[] = [];

  inputNote:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content:'First Note',
        completed:false
      },
      {
        content:'Second Note',
        completed:false
      }
    ]

  }

  toggleDone(id: number){
    this.todos?.map((v,i) =>{
      if(i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteNote (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addNote () {
    this.todos.push({
      content: this.inputNote,
      completed: false
    });

    this.inputNote = "";
  }

}
