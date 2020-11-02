import { Training } from './../../models/training.interface';
import { loadTraining } from './../../redux/action';
import { Router } from '@angular/router';
import { User } from './../../models/user.interface';
import { InitialState } from './../../models/redux.interface';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @select() user$: Observable<User>;

  displayedColumns: string[] = ['title', 'status'];
  trainingModules = [
    {
      id: 't1',
      title: 'Training 1',
      status: 'todo',
      author: 'test1',
      createdOn: '10/10/2010',
      progress: 0,
      content: [
        'test1 - content 1',
        'test1 - content 2',
        'test1 - content 3',
        'test1 - content 4',
        'test1 - content 5'
      ],
      started: false,
      completed: false
    },
    {
      id: 't2',
      title: 'Training 2',
      status: 'in-progress',
      author: 'test2',
      createdOn: '10/10/2000',
      progress: 70,
      content: [
        'test2 - content 1',
        'test2 - content 2',
        'test2 - content 3',
      ],
      started: true,
      completed: false
    },
    {
      id: 't3',
      title: 'Training 3',
      status: 'complete',
      author: 'test3',
      createdOn: '10/10/2019',
      progress: 100,
      content: [
        'test3 - content 1',
        'test3 - content 2',
        'test3 - content 3',
        'test3 - content 4',
        'test3 - content 5',
        'test3 - content 6',
        'test3 - content 7'
      ],
      started: true,
      completed: true
    }
  ];
  title: string;
  dataSource = null;
  loaded: boolean;

  constructor(private ngRedux: NgRedux<InitialState>, private router: Router) {
  }

  ngOnInit(): void {
    this.ngRedux
      .select<Array<Training>>('training')
      .subscribe((items: Array<Training>) => {
        if (items && items.length > 0) {
          this.dataSource = new MatTableDataSource(items);
          this.loaded = true;
        } else {
          setTimeout(() => {
            this.dataSource = new MatTableDataSource(this.trainingModules);
            this.ngRedux.dispatch(loadTraining(this.trainingModules));
            this.loaded = true;
            console.log('fetched api');
          }, 2000);
        }
      });
  }

}
