import { DetailRecipeComponent } from './../shared/shared-module/detail-recipe/detail-recipe.component';
import { ObservableService } from './../shared/services/observableService.service';
import { RecipesWebService } from './../shared/webservices/recipes.webservice';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  responseHTTP = {
    // results : [
    //   {
    //     'id': 1,
    //     'title': 'Pasta y arroz'

    //   }
    // ]
  };

 constructor(private recipesWebService: RecipesWebService, public modalController: ModalController) {
  }

  ngOnInit() {

  }
   search(event: any){
     console.log(event);
     const value = event.target.value;
     console.log(value);
     this.recipesWebService.getRecipes(value).subscribe(
       (data) => {
         this.responseHTTP = data;
         console.log(data);
       }
     );
   }

  async handleOpenModal(recipeId: number) {
    const modal = await this.modalController.create({
      component: DetailRecipeComponent,
      cssClass: '',
      componentProps: {
        'id': recipeId
      }
    });
    return await modal.present();
  }

}

