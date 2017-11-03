import { Component, OnInit } from '@angular/core';

import { DragulaService } from 'ng2-dragula/ng2-dragula'
import { HtmlService } from '../html.services'

declare var $:any
declare var d3:any

@Component({
  selector: 'app-worktable',
  templateUrl: './worktable.component.html',
  styleUrls: ['./worktable.component.scss']
})

export class WorktableComponent implements OnInit {

  mgs:string = ''
  items:string[] = [
    'menu', 'format_shapes', 'attach_file'
    // 'menu', 'format_shapes', 'note_add', 'content_paste', 'add_location', 'insert_chart', 'attach_file'
  ]

  dic:object = {
    menu: 'nav',
    format_shapes: 'text',
    note_add: '',
    content_paste: '',
    add_location: '',
    insert_chart: '',
    attach_file: 'file'
  }

  components:any = {
    removeOnSpill: true
  }

  htmlService:HtmlService;

  constructor(private dragula:DragulaService){

    this.dragula.setOptions('bag-components', {
      copy: true
    })

    this.htmlService = new HtmlService()
  }

  ngOnInit(){

    this.dragula.drag.subscribe(value=>{
      this.mgs = `Dragging the ${ value[1].innerText }!`
    })

    this.dragula.drop.subscribe(value=>{

      this.mgs = `Dropped the ${ value[1].innerText }!`

      if(value[2].className != null){
        if(value[2].className.indexOf('worktable') > -1 && value[3].className.indexOf('bar-components') > -1){
          let table = document.querySelector('.worktable')
          let workTable = document.querySelectorAll('.worktable a')
          let div = document.createElement('div')

          try{
            // table.insertBefore(div, workTable[0])
            this.htmlService.component({
              tag: div,
              component: this.dic[value[1].innerText]
            })
            table.replaceChild(div, workTable[0])
          }catch(ex){
            console.error(ex)
          }
        }
      }

    })

  }

  ngAfterViewInit(){

  }

}
