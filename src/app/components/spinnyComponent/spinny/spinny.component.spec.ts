import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnyComponent } from './spinny.component';
import { SpinnyService } from '../../../services/spinnyService/spinny.service';
describe('SpinnyComponent', () => {
  let component: SpinnyComponent;
  let fixture: ComponentFixture<SpinnyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpinnyComponent],
      providers: [SpinnyService]
    })
      .overrideTemplate(SpinnyComponent, '')
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
