import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SelectionService {
	private selection$ = new BehaviorSubject<string | null>(null);

	constructor() {
		document.addEventListener("selectionchange", () => {
			const selection = window.getSelection();
			const text = selection ? selection.toString() : null;
			if (text) {
				this.selection$.next(text);
			}
		});
	}

	get selectionChanges() {
		return this.selection$.asObservable();
	}
}
