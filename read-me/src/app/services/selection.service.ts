import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class SelectionService {
	private selection$ = new BehaviorSubject<string | null>(null);

	constructor(@Inject(DOCUMENT) document: any) {
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
