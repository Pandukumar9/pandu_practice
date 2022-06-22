import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonSampleComponent } from './skeleton-sample.component';

describe('SkeletonSampleComponent', () => {
  let component: SkeletonSampleComponent;
  let fixture: ComponentFixture<SkeletonSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
