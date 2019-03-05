import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
    // next lines are to check the service is working
    this.issueService.getIssues().subscribe((issues) => {
      console.log(issues);
    });
  }

}
