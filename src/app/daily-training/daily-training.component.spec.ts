import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTrainingComponent } from './daily-training.component';

describe('DailyTrainingComponent', () => {
  let component: DailyTrainingComponent;
  let fixture: ComponentFixture<DailyTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DailyTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
