import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';
import { DetailRecipeComponent} from '../shared/shared-module/detail-recipe/detail-recipe.component';
const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
    children: [
      {
        path: 'detail',
        component: DetailRecipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
