import { Component, OnInit } from '@angular/core';
import { AnimalService } from 'src/app/animal.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private animalService: AnimalService) { }

  ngOnInit() {
    this.animalService.getAnimals().subscribe(animals => {
      console.log(animals);
    });
  }

  
}
