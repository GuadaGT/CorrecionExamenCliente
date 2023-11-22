import {Component, OnInit} from '@angular/core';
import {Marvel} from "../../common/MarvelAPI";
import {ActivatedRoute} from "@angular/router";
import {MarvelOneService} from "../../services/marvel-one.service";

@Component({
  selector: 'app-marvel-one',
  templateUrl: './marvel-one.component.html',
  styleUrls: ['./marvel-one.component.css']
})
export class MarvelOneComponent implements OnInit{
  Comic!: Marvel;
  constructor(
      private ar: ActivatedRoute,
      private marveloneService: MarvelOneService) {}
  ngOnInit(): void
  {
    this.loadComic();
  }

  private loadComic()
  {
    const id = this.ar.snapshot.params['id'];
    this.marveloneService.getComic(id).subscribe(
        {
          next:value => {
            this.Comic = value.results;
          },
          error:(err)=>{
            console.error(err);
          },
          complete:()=>{
            console.log('complete');
          }
        }
    )
  }
}
