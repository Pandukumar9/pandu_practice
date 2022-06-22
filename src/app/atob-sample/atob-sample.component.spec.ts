import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtobSampleComponent } from './atob-sample.component';

describe('AtobSampleComponent', () => {
  let component: AtobSampleComponent;
  let fixture: ComponentFixture<AtobSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtobSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtobSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
