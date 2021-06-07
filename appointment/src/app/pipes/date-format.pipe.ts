import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date): string {
    var date=new Date(Number(value) * 1000);
    
    return date.toLocaleDateString()+` ${date.getHours()}:${Number(date.getMinutes())<10?'0'+date.getMinutes():date.getMinutes()}`;
  }

}
