import { Component, DestroyRef, forwardRef, inject } from "@angular/core";
import {
	FormControl,
	FormGroup,
	NG_VALIDATORS,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule,
	ValidationErrors,
} from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { TextareaModule } from "primeng/textarea";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TooltipModule } from "primeng/tooltip";
const noopFn = () => {};

@Component({
	selector: "app-action-field",
	standalone: true,
	imports: [ButtonModule, ReactiveFormsModule, TextareaModule, TooltipModule],
	templateUrl: "./action-field.component.html",
	styleUrl: "./action-field.component.scss",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => ActionFieldComponent),
			multi: true,
		},
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => ActionFieldComponent),
			multi: true,
		},
	],
})
export class ActionFieldComponent {
	readonly textFieldForm = new FormGroup({
		value: new FormControl<string | undefined>(undefined),
	});

	private onChange: (value: string | undefined) => void = noopFn;
	private onTouched: () => void = noopFn;
	private readonly destroyRef = inject(DestroyRef);

	ngOnInit(): void {
		this.textFieldForm.valueChanges
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((formValue) => {
				const data = formValue.value || null;
				this.onChange(data || undefined);
				this.onTouched();
			});
	}

	writeValue(selectedValue: string | undefined): void {
		if (selectedValue) {
			this.textFieldForm.patchValue(
				{ value: selectedValue },
				{ emitEvent: false },
			);
			console.log("sent");
		} else {
			this.textFieldForm.reset(undefined, { emitEvent: false });
		}
	}

	registerOnChange(fn: typeof this.onChange): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: typeof this.onTouched): void {
		this.onTouched = fn;
	}

	validate(): ValidationErrors | null {
		return this.textFieldForm.invalid ? { invalid: true } : null;
	}
}
