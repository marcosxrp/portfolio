import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinguagensFrameworksComponent } from './linguagens-frameworks.component';

describe('LinguagensFrameworksComponent', () => {
  let component: LinguagensFrameworksComponent;
  let fixture: ComponentFixture<LinguagensFrameworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinguagensFrameworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinguagensFrameworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
