import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {SearchService} from '../search.service';
import {Definitions} from '../definitions';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  searchForm;
  definitions;

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
  ) {
    this.searchForm = this.formBuilder.group({
      searchedWord: '',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(userData) {
    // console.log(userData);
    this.definitions = this.searchService.searchWords(userData)
      .subscribe((response: Definitions) => {
      this.definitions = response;
      console.log(this.definitions['body'][0]);
    });

    // console.warn('You searched for ', userData);
  }
}
