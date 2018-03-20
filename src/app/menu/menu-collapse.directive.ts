import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Host } from '@angular/core';

@Directive({
  selector: '[appMenuCollapse]'
})
export class MenuCollapseDirective {

  private isCollapsed: Boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('click') onMouseClick() {

      const collapsedEl = this.el.nativeElement.querySelector('.child-level');
      const arrowEl = this.el.nativeElement.querySelector('i#arrow');
      const listContainerEl = this.el.nativeElement;
      const topLevelEl = this.el.nativeElement.querySelector('.top-level');

      if (this.isCollapsed) {
        this.collapseMenu(collapsedEl, arrowEl, listContainerEl, topLevelEl);
      } else {
        this.expandMenu(collapsedEl, arrowEl, listContainerEl, topLevelEl);
      }

   }

  private collapseMenu(element: string, arrowEl: string, liContainerEl: string, topLevelEl: string) {
    this.renderer.setStyle(element, 'display', 'none');
    this.renderer.removeClass(arrowEl, 'fa-arrow-up');
    this.renderer.addClass(arrowEl, 'fa-arrow-down');
    this.renderer.addClass(liContainerEl, 'collapsed-color');
    this.renderer.removeStyle(topLevelEl, 'color');
    this.isCollapsed = !this.isCollapsed;
  }

  private expandMenu(element: string, arrowEl: string, liContainerEl: string, topLevelEl: string) {
    this.renderer.setStyle(element, 'display', 'block');
    this.renderer.removeClass(arrowEl, 'fa-arrow-down');
    this.renderer.addClass(arrowEl, 'fa-arrow-up');
    this.renderer.removeClass(liContainerEl, 'collapsed-color');
    this.renderer.setStyle(topLevelEl, 'color', '#fff');
    this.isCollapsed = !this.isCollapsed;
  }
}
