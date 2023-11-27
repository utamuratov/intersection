import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';

@Component({
  selector: 'ngx-intersection',
  standalone: true,
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxIntersectionComponent implements AfterViewInit, OnDestroy {
  /**
   *
   * threshold is the percentage of the observed element within the root.
   * Use this to trigger an intersection when a percentage of the observed
   * element is within the root i.e. trigger when 65% of my element
   * is within the viewport (root). Values are % based
   * between 0 and 1. i.e. threshold: .65
   *
   */
  @Input()
  threshold = 0.75;

  /**
   *
   */
  @Output()
  isIntersecting = new EventEmitter<boolean>();

  /**
   *
   */
  private observer!: IntersectionObserver;

  /**
   *
   */
  constructor(private el: ElementRef) {}

  /**
   *
   */
  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting === true) {
          this.isIntersecting.emit(true);
        } else {
          this.isIntersecting.emit(false);
        }
      },
      {
        threshold: this.threshold,
      }
    );

    this.observer.observe(this.el.nativeElement as HTMLElement);
  }

  /**
   *
   */
  ngOnDestroy() {
    this.observer.disconnect();
  }
}
