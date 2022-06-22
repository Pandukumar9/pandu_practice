import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialSampleComponent } from './material-sample.component';

describe('MaterialSampleComponent', () => {
  let component: MaterialSampleComponent;
  let fixture: ComponentFixture<MaterialSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
