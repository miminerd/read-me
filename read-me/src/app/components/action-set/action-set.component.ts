import { Component, EventEmitter, Output } from "@angular/core";
import {
	FormControl,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
} from "@angular/forms";
import { SelectButton } from "primeng/selectbutton";
import { FormatAction, TextFormatting } from "../../types/types";

@Component({
	selector: "app-action-set",
	standalone: true,
	imports: [ReactiveFormsModule, SelectButton, FormsModule],
	templateUrl: "./action-set.component.html",
	styleUrl: "./action-set.component.scss",
})
export class ActionSetComponent {
	@Output()
	readonly setFormat = new EventEmitter<string>();

	value: TextFormatting = "default";

	stateOptions: FormatAction[] = [
		{ value: "bold", icon: "fa-solid fa-bold" },
		{
			value: "italic",
			icon: "fa-solid fa-italic",
		},
		{
			value: "code",
			icon: "fa-solid fa-code",
		},
	];

	constructor() {}

	ngOnInit() {}
	sendFormat(format: TextFormatting) {
		this.setFormat.emit(format);
	}
}
