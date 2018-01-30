import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSizePageComponent } from './choose-size-page.component';

describe('ChooseSizePageComponent', () => {
  let component: ChooseSizePageComponent;
  let fixture: ComponentFixture<ChooseSizePageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ChooseSizePageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseSizePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
