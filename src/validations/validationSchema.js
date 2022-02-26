import * as yup from "yup";

export const newItemSchema = yup.object().shape({
	itemName: yup.string().required("Item Name Required"),
	description: yup.string().required("Description Required"),
	vendor: yup.string(),
	department: yup.string(),
	onHandQty: yup.number().required(),
	costPrice: yup.number().required("Cost Price Required"),
	salesPrice: yup.number().required("Sales Price Required"),
	wholesalePrice: yup.number(),
	retailPrice: yup.number(),
});

export default newItemSchema;
