import { definePreset } from "@primeng/themes";
import Aura from "@primeng/themes/aura";

export const MyPreset = definePreset(Aura, {
	semantic: {
		primary: {
			50: "{indigo.50}",
			100: "{indigo.100}",
			200: "{indigo.200}",
			300: "{indigo.300}",
			400: "{indigo.400}",
			500: "{indigo.500}",
			600: "{indigo.600}",
			700: "{indigo.700}",
			800: "{indigo.800}",
			900: "{indigo.900}",
			950: "{indigo.950}",
		},
	},
	components: {
		button: {
			icon: {
				only: {
					width: "30px",
				},
			},
		},
		togglebutton: {
			colorScheme: {
				light: {
					padding: "8px 10px 8px 10px",
					width: "{slate.800}",
					checked: {
						background: "{indigo.50}",
						color: "{indigo.500}",
					},
				},
			},
		},
	},
});
