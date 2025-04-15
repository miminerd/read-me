export type TextFormatting = "bold" | "italic" | "code" | "default";
export type headingType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
export interface FormatAction {
	value: TextFormatting;
	icon: string;
}
