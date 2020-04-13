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
  word;
  isResultAvailable = true;
  enlishDefinitionList: string[];

  constructor(
    private formBuilder: FormBuilder,
    private searchService: SearchService,
  ) {
    this.searchForm = this.formBuilder.group({
      searchedWord: '',
    });
  }

  ngOnInit(): void {
    // this.isResultAvailable = false;
    // console.log(this.isResultAvailable);
  }

  onSubmit(userData) {
    // console.log(userData);
    this.definitions = this.searchService.searchWords(userData)
      .subscribe((response: Definitions) => {
        this.definitions = response;

        this.enlishDefinitionList = this.searchService.getEnglishDefinitions(this.definitions['body'][0]);
        this.word = this.enlishDefinitionList[this.enlishDefinitionList.length -1];
          console.log(this.enlishDefinitionList);
        this.isResultAvailable = false;
        console.log(this.enlishDefinitionList);
      });

    // console.warn('You searched for ', userData);
  }
}
