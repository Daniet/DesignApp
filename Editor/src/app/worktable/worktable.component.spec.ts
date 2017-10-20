import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorktableComponent } from './worktable.component';

describe('WorktableComponent', () => {
  let component: WorktableComponent;
  let fixture: ComponentFixture<WorktableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorktableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorktableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
