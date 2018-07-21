import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PupilAddComponent } from './pupil-add.component';

describe('PupilAddComponent', () => {
  let component: PupilAddComponent;
  let fixture: ComponentFixture<PupilAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PupilAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PupilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
