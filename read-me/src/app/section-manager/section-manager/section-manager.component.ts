import { Component, DestroyRef, forwardRef, inject } from "@angular/core";
import {
	FormControl,
	FormGroup,
	FormsModule,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule,
} from "@angular/forms";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ActionFieldComponent } from "../../components/action-field/action-field.component";

@Component({
	selector: "app-section-manager",
	standalone: true,
	imports: [ActionFieldComponent, ReactiveFormsModule, FormsModule],
	templateUrl: "./section-manager.component.html",
	styleUrl: "./section-manager.component.scss",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => SectionManagerComponent),
			multi: true,
		},
	],
})
export class SectionManagerComponent {
	private readonly destroyRef = inject(DestroyRef);
	readonly sectionForm = new FormGroup({
		sectionValue: new FormControl<string | undefined>(undefined, {
			nonNullable: true,
		}),
	});

	constructor() {
		this.sectionForm.controls.sectionValue.valueChanges
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((d) => {});
	}
}
