import { ActivatedRoute } from '@angular/router';
import { Training } from './../../models/training.interface';
import { InitialState } from './../../models/redux.interface';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-training',
  templateUrl: './view-training.component.html',
  styleUrls: ['./view-training.component.scss']
})
export class ViewTrainingComponent implements OnInit {
  selectedTraining: Training;

  constructor(private ngRedux: NgRedux<InitialState>, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.ngRedux
      .select<Array<Training>>('training')
      .subscribe((items: Array<Training>) => {
        if (items) {
          this.selectedTraining = items.filter(item => item.id === id)[0];
          console.log('selected training', this.selectedTraining);
        }
      });
  }

}
