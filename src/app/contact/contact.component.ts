import { Component, OnInit, resolveForwardRef } from '@angular/core';
import {AppService} from '..//app.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
courseDetails
  constructor(private service:AppService) { }

  ngOnInit(): void {
    let data=localStorage.getItem("name")
    console.log("data",data)
    let data1=sessionStorage.getItem("data")
    console.log("data1",data1)
    this.service.getCourseDetails().subscribe(res=>{

      console.log("res",res)
      this.courseDetails=res['courseDetails']
    })

  }

}
