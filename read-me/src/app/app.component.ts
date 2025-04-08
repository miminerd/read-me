import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { ButtonModule } from "primeng/button";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";

@Component({
	selector: "app-root",
	imports: [ButtonModule, EditableTableComponent, RouterOutlet],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "read-me";
}
