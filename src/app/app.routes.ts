import { Routes } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';


export const routes: Routes = [
    {path: '', component: WrapperComponent},
    {path: 'legal-notice', component: LegalNoticeComponent}
];
