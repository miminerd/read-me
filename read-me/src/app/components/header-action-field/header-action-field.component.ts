import {
	Component,
	DestroyRef,
	forwardRef,
	inject,
	input,
	signal,
} from "@angular/core";
import {
	FormControl,
	FormGroup,
	FormsModule,
	NG_VALUE_ACCESSOR,
	ReactiveFormsModule,
} from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { ActionFieldComponent } from "../action-field/action-field.component";
import { AutoFocusModule } from "primeng/autofocus";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ActionSetComponent } from "../action-set/action-set.component";
import { TextStylePipe } from "../../pipes/text-formatter-pipe";
import { SelectionService } from "../../services/selection.service";
import { TextFormatting } from "../../types/types";

@Component({
	selector: "app-header-action-field",
	standalone: true,
	imports: [
		AutoFocusModule,
		ActionSetComponent,
		ButtonModule,
		FormsModule,
		ActionFieldComponent,
		ReactiveFormsModule,
		TextStylePipe,
	],
	templateUrl: "./header-action-field.component.html",
	styleUrl: "./header-action-field.component.scss",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => HeaderActionFieldComponent),
			multi: true,
		},
	],
})
export class HeaderActionFieldComponent {
	defaultValue = input("default");
	private readonly destroyRef = inject(DestroyRef);
	readonly canEdit = input(false);
	protected readonly isEditModeActive = signal(false);
	selectedText: string | undefined;
	targetFormat: TextFormatting = "default";

	readonly targetForm = new FormGroup({
		itemValue: new FormGroup({
			value: new FormControl<string | undefined>(undefined, {
				nonNullable: true,
			}),
		}),
	});

	constructor(private selectionService: SelectionService) {
		this.targetForm.controls.itemValue.valueChanges
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((d) => {});
	}

	ngOnInit(): void {
		this.selectionService.selectionChanges
			.pipe(takeUntilDestroyed(this.destroyRef))
			.subscribe((text) => {
				this.selectedText = text ?? "";
			});
	}

	onItemClick() {
		this.activateEditMode();
	}

	activateEditMode() {
		this.isEditModeActive.set(true);
	}

	getValue() {
		return this.targetForm.value.itemValue!.value || this.defaultValue();
	}
	deactivateEditMode() {
		this.isEditModeActive.set(false);
	}

	formatText(type: string) {
		this.targetFormat = type as TextFormatting;
	}
}
