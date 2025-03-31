import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTreinosComponent } from './lista-treinos.component';

describe('ListaTreinosComponent', () => {
  let component: ListaTreinosComponent;
  let fixture: ComponentFixture<ListaTreinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTreinosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTreinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
