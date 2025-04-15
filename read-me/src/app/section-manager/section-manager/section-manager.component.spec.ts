import { ComponentFixture, TestBed } from "@angular/core/testing";

import { SectionManagerComponent } from "./section-manager.component";

describe("SectionManagerComponent", () => {
	let component: SectionManagerComponent;
	let fixture: ComponentFixture<SectionManagerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SectionManagerComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(SectionManagerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
