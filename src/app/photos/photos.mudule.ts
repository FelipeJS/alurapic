import { NgModule } from "@angular/core";

import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";
import { PhotoModule } from "./photo/photo.module";
import { CardModule } from "../shared/components/card/card.module";

@NgModule({
    declarations: [

    ],
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule
    ]
})
export class PhotosModule {

}