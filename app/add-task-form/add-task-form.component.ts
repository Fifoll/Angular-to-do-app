import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {
  
  taskStatus = [
    {
      name: 'Open',
      value: 'open'
    },
    {
      name: 'In progress',
      value: 'inProgress'
    },
    {
      name: 'Review',
      value: 'review'
    },
    {
      name: 'Close',
      value: 'close'
    },
  ];

  taskForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    description: new FormControl(''),
    dueDate: new FormControl(''),
    status: new FormControl('OPEN')
  });


  
  constructor(private taskService: TaskService) { }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log(JSON.stringify(this.taskForm.value));
    this.taskService.addTask(this.taskForm.value).subscribe();
  }

  
}
