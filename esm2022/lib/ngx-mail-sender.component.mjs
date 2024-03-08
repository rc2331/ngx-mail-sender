import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./ngx-mail-sender.service";
export class NgxMailSenderComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.3", ngImport: i0, type: NgxMailSenderComponent, deps: [{ token: i1.HttpClient }, { token: i2.NgxMailSenderService }], target: i0.ɵɵFactoryTarget.Component }); }
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
        }], ctorParameters: () => [{ type: i1.HttpClient }, { type: i2.NgxMailSenderService }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1haWwtc2VuZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYWlsLXNlbmRlci9zcmMvbGliL25neC1tYWlsLXNlbmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQWExQyxNQUFNLE9BQU8sc0JBQXNCO0lBV2pDLFlBQW9CLElBQWUsRUFBUyxvQkFBeUM7UUFBakUsU0FBSSxHQUFKLElBQUksQ0FBVztRQUFTLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBcUI7UUFWdEYsY0FBUyxHQUFHO1lBQ1QsRUFBRSxFQUFFLEVBQUU7WUFDTixPQUFPLEVBQUUsRUFBRTtZQUNYLElBQUksRUFBRSxFQUFFO1lBQ1IsSUFBSSxFQUFDLEVBQUU7WUFDUCxRQUFRLEVBQUMsRUFBRTtZQUNYLFFBQVEsRUFBQyxFQUFFO1lBQ1gsU0FBUyxFQUFDLEVBQUU7U0FDWixDQUFDO0lBRXFGLENBQUM7SUFFekYsU0FBUyxDQUFDLFNBQWE7UUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBRSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQ3RELFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxRQUFRLENBQUMsRUFDNUQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEtBQUssQ0FBQyxDQUNyRCxDQUFDO0lBQ0EsQ0FBQzs4R0FsQlUsc0JBQXNCO2tHQUF0QixzQkFBc0IsMkRBUHZCOzs7O0dBSVQ7OzJGQUdVLHNCQUFzQjtrQkFUbEMsU0FBUzsrQkFDRSxxQkFBcUIsWUFDckI7Ozs7R0FJVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5neE1haWxTZW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZ3gtbWFpbC1zZW5kZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1uZ3gtbWFpbC1zZW5kZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgICA8cD5cbiAgICAgICBuZ3gtbWFpbC1zZW5kZXIgd29ya3MhXG4gICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBgYFxuIH0pXG5leHBvcnQgY2xhc3MgTmd4TWFpbFNlbmRlckNvbXBvbmVudCB7XG4gZW1haWxEYXRhID0ge1xuICAgIHRvOiAnJyxcbiAgICBzdWJqZWN0OiAnJyxcbiAgICB0ZXh0OiAnJyxcbiAgICBob3N0OicnLFxuICAgIGF1dGhVc2VyOicnLCBcbiAgICBhdXRoUGFzczonJywgXG4gICAgZnJvbVRpdGxlOicnLFxuICAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cENsaWVudCxwcml2YXRlIG5neE1haWxTZW5kZXJTZXJ2aWNlOk5neE1haWxTZW5kZXJTZXJ2aWNlICl7fVxuICBcbiAgc2VuZEVtYWlsKGVtYWlsRGF0YTphbnkpe1xudGhpcy5uZ3hNYWlsU2VuZGVyU2VydmljZS5zZW5kTWFpbCggZW1haWxEYXRhKS5zdWJzY3JpYmUoXG4gIHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKCdFbWFpbCBzZW50IHN1Y2Nlc3NmdWxseScsIHJlc3BvbnNlKSxcbiAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2VuZGluZyBlbWFpbCcsIGVycm9yKVxuKTtcbiAgfVxuXG59XG4iXX0=