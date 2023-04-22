import { Component, OnInit } from '@angular/core';
import { TaskService } from '../shared/services/task.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  tasks: any = [];
  loading: boolean = false;


  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.getTaskData();
  }


  getTaskData(): void {
    this.loading = true;
    this.taskService.getAllTasks()
    .subscribe({
      next: value => this.tasks = value,
      complete: () => this.loading = false
    });
  }

}
