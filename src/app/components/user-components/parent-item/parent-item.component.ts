import {Component, Input, OnInit} from '@angular/core';
import {Parent} from '../../../models/Users';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {ParentServiceService} from '../../../services/parent-service/parent-service.service';

@Component({
  selector: 'app-parent-item',
  templateUrl: './parent-item.component.html',
  styleUrls: ['./parent-item.component.css']
})
export class ParentItemComponent implements OnInit {

  @Input() parent: Parent;

  constructor(private route: ActivatedRoute, private parentService: ParentServiceService, private location: Location,
              private router: Router) { }

  ngOnInit() {
    this.getParent();
  }


  getParent(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.parentService.getParent(id).subscribe(parent => this.parent = parent);
  }

  goBack() {
    this.location.back();
  }

  onEditParent(id: number): void {
    this.router.navigate(['/parent-edit/', id]);

  }

}
