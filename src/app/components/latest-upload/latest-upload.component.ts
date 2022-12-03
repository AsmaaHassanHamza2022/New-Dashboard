import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'latest-upload',
  templateUrl: './latest-upload.component.html',
  styleUrls: ['./latest-upload.component.scss']
})
export class LatestUploadComponent implements OnInit {
  public allLetestuploaded=[
    {
      image:'../../../assets/images/pdf.svg',
      title:'my-file.pdf',
      content:'Elzero',
      time:'2.9mb'
    },
    {
      image:'../../../assets/images/avi.svg',
      title:'My-Video-File.avi',
      content:'Admin',
      time:'4.9mb'
    },
    {
      image:'../../../assets/images/psd.svg',
      title:'My-Psd-File.pdf',
      content:'Osama',
      time:'4.5mb'
    },
    {
      image:'../../../assets/images/zip.svg',
      title:'My-Zip-File.pdfy',
      content:'User',
      time:'8.9mb'
    },
    {
      image:'../../../assets/images/dll.svg',
      title:'My-DLL-File.pdf',
      content:'Osama',
      time:'4.9mb'
    },
    {
      image:'../../../assets/images/eps.svg',
      title:'My-Eps-File.pdf',
      content:'Designer',
      time:'8.9mb'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
