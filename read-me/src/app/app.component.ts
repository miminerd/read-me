import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { ButtonModule } from "primeng/button";
import { EditableTableComponent } from "./components/editable-table/editable-table.component";
import { HeadingComponent } from "./components/heading-section/heading/heading.component";
import { SectionManagerComponent } from "./section-manager/section-manager/section-manager.component";
import { PreviewComponent } from "./preview/preview/preview.component";

@Component({
	selector: "app-root",
	imports: [
		PreviewComponent,
		EditableTableComponent,
		HeadingComponent,
		SectionManagerComponent,
		RouterOutlet,
	],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "read-me";
}
