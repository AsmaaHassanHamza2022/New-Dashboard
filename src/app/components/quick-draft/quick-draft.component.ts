import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'quick-draft',
  templateUrl: './quick-draft.component.html',
  styleUrls: ['./quick-draft.component.scss']
})
export class QuickDraftComponent implements OnInit {

  //----------------------------Data-------------------------
  public quickDraftForm:any;

  constructor(private fb:FormBuilder) { 
    this.initForm();
  }

  ngOnInit(): void {
  }

//----------------------------Logic-------------------------

initForm(){
  this.quickDraftForm=this.fb.group({
    title:['', [Validators.required]],
    desc:['', [Validators.required]]
  })

}
public saveDraftData(){
  console.log(this.quickDraftForm)

  if (this.quickDraftForm.invalid) {

    Swal.fire({
      title: `Something went wrong!`,
      text: `You must fill All feilds`,
      icon: 'error',
      confirmButtonText: 'Ok'
    })

  }else{
    Swal.fire({
      title: `Your Draft Message save by (${this.quickDraftForm.get('title').value} ) as title!`,
      text: `Message is ${this.quickDraftForm.get('desc').value}`,
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  }
}


}
