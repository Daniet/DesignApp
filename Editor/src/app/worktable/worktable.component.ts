import { Component, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula'

declare var $:any

@Component({
  selector: 'app-worktable',
  templateUrl: './worktable.component.html',
  styleUrls: ['./worktable.component.scss']
})

export class WorktableComponent implements OnInit {

  mgs:string = ''
  items:string[] = [
    'menu', 'format_shapes', 'note_add', 'content_paste', 'add_location', 'insert_chart', 'attach_file'
  ]

  components:any = {
    removeOnSpill: false
  }

  constructor(private dragula:DragulaService){
    this.dragula.setOptions('bag-components', {
      copy: true
    })
  }

  ngOnInit(){

    this.dragula.drag.subscribe(value=>{
      this.mgs = `Dragging the ${ value[1].innerText }!`
      console.log('Dragging', value)
    })

    this.dragula.drop.subscribe(value=>{
      this.mgs = `Dropped the ${ value[1].innerText }!`
      console.log('Dropped', value)
      // value[1].remove()
    })

  }

  ngAfterViewInit(){

  }

}
