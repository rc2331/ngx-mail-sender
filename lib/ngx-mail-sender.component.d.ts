import { HttpClient } from '@angular/common/http';
import { NgxMailSenderService } from './ngx-mail-sender.service';
import * as i0 from "@angular/core";
export declare class NgxMailSenderComponent {
    private http;
    private ngxMailSenderService;
    emailData: {
        to: string;
        subject: string;
        text: string;
        host: string;
        authUser: string;
        authPass: string;
        fromTitle: string;
    };
    constructor(http: HttpClient, ngxMailSenderService: NgxMailSenderService);
    sendEmail(emailData: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxMailSenderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxMailSenderComponent, "lib-ngx-mail-sender", never, {}, {}, never, never, false, never>;
}
