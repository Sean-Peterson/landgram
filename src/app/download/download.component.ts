import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    window.location.href = 'https://itunes.apple.com/us/app/landgram/id1235141626?mt=8';
  }

}
