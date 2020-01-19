import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { ApiService } from '@app/services/api/api.service';

export interface DialogData {
  data: any;
}

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardsComponent implements OnInit {
  
  constructor(
    public dialog: MatDialog,
    private api: ApiService,
    private toastr: ToastrService,
    private ngxLoader: NgxUiLoaderService,
  ) { }

  ngOnInit() {
    this.ngxLoader.start();
  }
}

@Component({
  selector: 'dialog-push',
  templateUrl: 'dialog.push.html',
  styleUrls: ['./dashboards.component.scss']
})
export class DashboardPushDialog {

  constructor(
    private api: ApiService,
    private ngxLoader: NgxUiLoaderService,
    public dialogRef: MatDialogRef<DashboardPushDialog>,
    @Inject(MAT_DIALOG_DATA) public dialogConfig: DialogData
  ) { }

  ngOnInit() {
    this.ngxLoader.start();
    this.ngxLoader.stop();
  }
  onClose() {
    this.dialogRef.close();
  }
}