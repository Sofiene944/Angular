import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileinfoService } from 'src/app/services/fileinfo.service';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  constructor(private _fileService:FileinfoService, private http:HttpClient) { }

  icon: boolean = true;

click(){
    this.icon = !this.icon;
  }

  infos:any;
  errorMsg:any;
  selectedFile="Test File1"
  ngOnInit(): void {
    this._fileService.getData()
          .subscribe(data=>this.infos=data,error=>this.errorMsg=error)
  }

}
