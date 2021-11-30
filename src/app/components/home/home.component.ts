import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileinfoService } from 'src/app/services/fileinfo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  collapsed=true;
  counter=0;
  count:any;


  //store the file here
  selectedFile!: File;
  infos:any;
  errorMsg:any;

  constructor(private _fileService:FileinfoService, private http:HttpClient) {

    document.body.style.backgroundColor = "#E2E3E2ff" ;
    
   }

   

  ngOnInit(): void {
    this._fileService.getData()
                  .subscribe(data =>this.infos=data,
                    error=>this.errorMsg=error)
  }

  onFileSelected(event:any){

    this.selectedFile=<File>event.target.files[0];

  }
  onUpload(){
    const fd = new FormData();

    let x = fd.append('file',this.selectedFile,this.selectedFile?.name);

    this.http.post('http://localhost:8080/upload',fd,{ responseType: 'text' })
    .subscribe(res=>{
      console.log(res);
    })
  }

  loadPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
              .subscribe((response)=>{
                alert(JSON.stringify(response))
              })
  }

  Count(){
    this.counter = this.counter+1;
    }
  isEven(counter:any) {
      return this.counter % 2 == 0;
   }

}
