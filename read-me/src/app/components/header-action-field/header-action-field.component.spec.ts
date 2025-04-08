import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderActionFieldComponent } from "./header-action-field.component";

describe("HeaderActionFieldComponent", () => {
	let component: HeaderActionFieldComponent;
	let fixture: ComponentFixture<HeaderActionFieldComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HeaderActionFieldComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderActionFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
