import { Component, OnInit } from '@angular/core';

import { DashboardService, NotificationService } from '@app/core/services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.css']
})
export class DashboardPage implements OnInit {
  constructor(
    public dashboardService: DashboardService,
    private _notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.dashboardService.syncUserFiles();
  }

  onCopyDownloadURL(): void {
    this._notificationService.notify(
      'Lien de téléchargement copié dans le presse-papiers !'
    );
  }
}
