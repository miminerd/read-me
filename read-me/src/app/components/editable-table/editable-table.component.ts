import { Component } from "@angular/core";
import { TableModule } from "primeng/table";
import { HeaderActionFieldComponent } from "../header-action-field/header-action-field.component";

@Component({
	selector: "app-editable-table",
	standalone: true,
	imports: [TableModule, HeaderActionFieldComponent],
	templateUrl: "./editable-table.component.html",
	styleUrl: "./editable-table.component.scss",
})
export class EditableTableComponent {
	products = [
		{ code: "eeee ", name: "Juda ", category: "GMG", quantity: 4 },
		{ code: "ahae ", name: "Rubz ", category: "Lih", quantity: 2 },
	];
}
