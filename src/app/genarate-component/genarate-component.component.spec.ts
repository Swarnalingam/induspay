import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenarateComponentComponent } from './genarate-component.component';

describe('GenarateComponentComponent', () => {
  let component: GenarateComponentComponent;
  let fixture: ComponentFixture<GenarateComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenarateComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenarateComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
