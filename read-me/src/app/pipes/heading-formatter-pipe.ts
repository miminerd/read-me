import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headingFormat',
})
export class HeadingFormatPipe implements PipeTransform {
  transform(value: string, headingType: string | undefined): string {
    if (!value || !headingType) {
      return value;
    }

    const allowedHeadings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    if (!allowedHeadings.includes(headingType)) {
      return value;
    }

    return `<${headingType}>${value}</${headingType}>`;
  }
}
