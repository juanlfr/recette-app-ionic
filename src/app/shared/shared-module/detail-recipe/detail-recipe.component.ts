import { RecipesWebService } from './../../webservices/recipes.webservice';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.scss'],
})
export class DetailRecipeComponent implements OnInit {

  @Input() id: number;
  recipe: {};

  constructor(private route: ActivatedRoute, private recipesWebService: RecipesWebService) {}
  

  ngOnInit() {

  }

  getRecipeDetails(id: number) {
    this.recipesWebService.getDetails(id).subscribe(
      (data) => {
        this.recipe = data;
      }
    );
  }
}
