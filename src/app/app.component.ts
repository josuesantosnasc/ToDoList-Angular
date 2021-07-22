import { Todos } from './models/Todos';
import { Component, OnInit } from '@angular/core';
import { compileClassMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos:Todos[];
  inputWrite:string;

  ngOnInit(){
    this.todos=[
      {
        activity:'Activity 0',
        completed:false
      },
      {
        activity:'Activity 1',
        completed:false
      },
      {
        activity:'Activity 2',
        completed:true
      }
    ]


  }

  activityDone(id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed=!v.completed;
      return v
    })
  }

  Delete(id:number){
    this.todos=this.todos.filter((v,i)=>
      i!==id
    )
  }

  addToDo(){
    this.todos.push({
      activity:this.inputWrite,
      completed:false
    })
  }


}
