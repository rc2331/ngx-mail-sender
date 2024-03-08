import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';
import * as i1 from '@angular/common/http';

class NgxMailSenderService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://mail-sender.ap-1.evennode.com/sendMail';
    }
    sendMail(emailData) {
        return this.http.post(this.apiUrl, emailData);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxMailSenderService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxMailSenderService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxMailSenderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.HttpClient }] });

class NgxMailSenderComponent {
    constructor(http, ngxMailSenderService) {
        this.http = http;
        this.ngxMailSenderService = ngxMailSenderService;
        this.emailData = {
            to: '',
            subject: '',
            text: '',
            host: '',
            authUser: '',
            authPass: '',
            fromTitle: '',
        };
    }
    sendEmail(emailData) {
        this.ngxMailSenderService.sendMail(emailData).subscribe(response => console.log('Email sent successfully', response), error => console.error('Error sending email', error));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxMailSenderComponent, deps: [{ token: i1.HttpClient }, { token: NgxMailSenderService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.3", type: NgxMailSenderComponent, selector: "lib-ngx-mail-sender", ngImport: i0, template: `
     <p>
       ngx-mail-sender works!
     </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxMailSenderComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ngx-mail-sender', template: `
     <p>
       ngx-mail-sender works!
     </p>
  ` }]
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: NgxMailSenderService }] });

/*
 * Public API Surface of ngx-mail-sender
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxMailSenderComponent, NgxMailSenderService };
//# sourceMappingURL=ngx-mail-sender.mjs.map
