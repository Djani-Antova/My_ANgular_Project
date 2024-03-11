import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ThemesAllComponent } from "./themes-all/themes-all.component";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";
import { ThemeAddComponent } from "./theme-add/theme-add.component";
import { HowWorksComponent } from "../how-works/how-works.component";

const routes: Routes = [
    {
        path: 'themes',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: ThemesAllComponent
            },
            {
                path: ':themeId',
                component: ThemeDetailsComponent
            }
        ]
    },
    {
        path: 'add-theme',
        component: ThemeAddComponent,
        // canActivate: [AuthActivate]
    },
    {
        path: 'how-works',
        component: HowWorksComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThemeRoutingModule { }