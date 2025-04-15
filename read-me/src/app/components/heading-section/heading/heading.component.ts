import { Component } from "@angular/core";
import { HeadingFormatPipe } from "../../../pipes/heading-formatter-pipe";
import { headingType } from "../../../types/types";

@Component({
	selector: "app-heading",
	standalone: true,
	imports: [HeadingFormatPipe],
	templateUrl: "./heading.component.html",
	styleUrl: "./heading.component.scss",
})
export class HeadingComponent {
	text = "This is a heading";
	selectedHeading: headingType = "h3";
}
