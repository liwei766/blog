import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogSharedModule } from 'app/shared';
import {
    JobMySuffixComponent,
    JobMySuffixDetailComponent,
    JobMySuffixUpdateComponent,
    JobMySuffixDeletePopupComponent,
    JobMySuffixDeleteDialogComponent,
    jobRoute,
    jobPopupRoute
} from './';

const ENTITY_STATES = [...jobRoute, ...jobPopupRoute];

@NgModule({
    imports: [BlogSharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        JobMySuffixComponent,
        JobMySuffixDetailComponent,
        JobMySuffixUpdateComponent,
        JobMySuffixDeleteDialogComponent,
        JobMySuffixDeletePopupComponent
    ],
    entryComponents: [JobMySuffixComponent, JobMySuffixUpdateComponent, JobMySuffixDeleteDialogComponent, JobMySuffixDeletePopupComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogJobMySuffixModule {}
