import * as yup from "yup";

const validationsForm = {
	itemName: yup.string().required("Item Name Required"),
	description: yup.string().required("Description Required"),
	vendor: yup.string(),
	phone: yup.number(),
	costPrice: yup.number().required("Cost Price Required"),
	salesPrice: yup.number().required("Sales Price Required"),
};

export default validationsForm;
