import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OdprzUiComponent } from './odprz-ui.component';

describe('OdprzUiComponent', () => {
  let component: OdprzUiComponent;
  let fixture: ComponentFixture<OdprzUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OdprzUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OdprzUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
