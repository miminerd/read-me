import { Pipe, PipeTransform } from "@angular/core";
import { TextFormatting } from "../types/types";

@Pipe({
	name: "textStyle",
})
export class TextStylePipe implements PipeTransform {
	transform(
		value: string | null | undefined,
		style: TextFormatting,
		target?: string | null,
	): string {
		if (!value?.trim()) return "";
		if (!target?.trim()) return value;

		const tag =
			style === "bold"
				? "strong"
				: style === "italic"
					? "em"
					: style === "code"
						? "code"
						: "";

		if (!tag) return value;

		const escapedTarget = target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
		const regex = new RegExp(escapedTarget, "g");

		return value.replace(regex, `<${tag}>${target}</${tag}>`);
	}
}
