import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    console.log('This images is broken', this.elHost);
    elNative.src =
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaArLOc0Pk34mIe9aXGm3QlsiC2psYrdh7GA&usqp=CAU';
  }
  constructor(private elHost: ElementRef) {
    console.log(elHost);
  }
}
