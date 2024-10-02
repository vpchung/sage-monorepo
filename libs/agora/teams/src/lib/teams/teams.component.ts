import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Team, TeamList, TeamService } from '@sagebionetworks/agora/api-client-angular';
import { HelperService } from '@sagebionetworks/agora/services';
import { TeamListComponent } from '../team-list/team-list.component';
import { catchError, finalize, map, Observable, of } from 'rxjs';

@Component({
  selector: 'agora-teams',
  standalone: true,
  imports: [CommonModule, TeamListComponent],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  providers: [HelperService, TeamService],
})
export class TeamsComponent implements OnInit {
  teams$!: Observable<Team[]>;

  constructor(
    private helperService: HelperService,
    private teamService: TeamService,
  ) {}

  ngOnInit() {
    this.loadTeams();
  }

  loadTeams() {
    this.helperService.setLoading(true);

    this.teams$ = this.teamService.listTeams().pipe(
      map((res: TeamList) => res.items || []),
      catchError((error: Error) => {
        console.error('Error loading teams:', error.message);
        return of([]);
      }),
      finalize(() => this.helperService.setLoading(false)),
    );
  }
}