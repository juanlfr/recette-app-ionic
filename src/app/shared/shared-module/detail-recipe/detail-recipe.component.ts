import { RecipesWebService } from './../../webservices/recipes.webservice';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-detail-recipe',
  templateUrl: './detail-recipe.component.html',
  styleUrls: ['./detail-recipe.component.scss'],
})
export class DetailRecipeComponent implements OnInit {

  @Input() id: number;
  recipe: {};
  // recipe: {
  //   'id': 2,
  //   'servings': 'trois'
  //   'title': 'bla'
  // };

  constructor(private recipesWebService: RecipesWebService, private modalCtrl: ModalController) {}

  ngOnInit() {
    this.test();
    this.getRecipeDetails(this.id);
  }

  test() {
    console.log(this.id);
  }

  getRecipeDetails(id) {
    this.recipesWebService.getDetails(id).subscribe(
      (data) => {
        this.recipe = data;
      }
    );
  }
  handleDismissModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
