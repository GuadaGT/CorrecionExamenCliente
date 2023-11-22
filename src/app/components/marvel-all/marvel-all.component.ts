import {Component, OnInit} from '@angular/core';
import {MarvelAllService} from "../../services/marvel-all.service";
import {Marvel} from "../../common/MarvelAPI";

@Component({
  selector: 'app-marvel-all',
  templateUrl: './marvel-all.component.html',
  styleUrls: ['./marvel-all.component.css']
})
export class MarvelAllComponent  implements OnInit{
  marvelComics: Marvel[] = [];

  constructor(private marvelService: MarvelAllService) {}

  ngOnInit(): void
  {
    this.loadComics();
  }

  private loadComics() {
    this.marvelService.getComics().subscribe(
        {
          next:value => {
            this.marvelComics = value.data.results;
            console.log(value);
          },
          error:(err)=>{
            console.error(err);
          },
          complete:()=> {
            console.log('complete');
          }
        }
    )
  }
}
