import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';

import { ApiService } from '@app/services/api/api.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor(
    private api: ApiService,
    private toastr: ToastrService,
    private ngxLoader: NgxUiLoaderService,
  ) { }

  ngOnInit() {
    this.ngxLoader.start();
    this.ngxLoader.stop();
  }
}
