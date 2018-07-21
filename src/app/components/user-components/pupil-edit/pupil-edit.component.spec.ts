import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilEditComponent } from './pupil-edit.component';

describe('PupilEditComponent', () => {
  let component: PupilEditComponent;
  let fixture: ComponentFixture<PupilEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
