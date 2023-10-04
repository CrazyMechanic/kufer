import { Component } from '@angular/core';
import { ToggleFilter } from '../../servises/toggle-profile-editing';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {

  constructor(public toggleFilter: ToggleFilter) {
  }

  closeFilter(): void {
    this.toggleFilter.isFilterVisible = false;
  }
}
