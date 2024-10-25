import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressUpOptionsComponent } from './dress-up-options.component';

describe('DressUpOptionsComponent', () => {
  let component: DressUpOptionsComponent;
  let fixture: ComponentFixture<DressUpOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DressUpOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DressUpOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
