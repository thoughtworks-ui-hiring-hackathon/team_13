import {
  Component,
  ContentChildren,
  ViewChild,
  QueryList,
  ElementRef
} from '@angular/core';
import { SliderItemDirective } from './slider-item.directive';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @ContentChildren(SliderItemDirective, { read: ElementRef }) items: QueryList<
    ElementRef<HTMLDivElement>
  >;
  @ViewChild('slides', { static: false }) slidesContainer: ElementRef<
    HTMLDivElement
  >;

  private slidesIndex = 0;

  get currentItem(): ElementRef<HTMLDivElement> {
    return this.items.find((item, index) => index === this.slidesIndex);
  }
}
