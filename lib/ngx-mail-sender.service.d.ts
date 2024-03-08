import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxMailSenderService {
    private http;
    private apiUrl;
    constructor(http: HttpClient);
    sendMail(emailData: any): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxMailSenderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxMailSenderService>;
}
