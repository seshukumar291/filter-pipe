import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, args?: any): any {

    // console.log('value', value);
    console.log('args', args);

    if(args){
      let todos = value.filter(value => value.userId === +args);
      console.log('todos', todos);
      return todos;
    }
    return null;
  }

}