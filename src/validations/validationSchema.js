import * as yup from "yup";

const validationsForm = {
	itemName: yup.string().required("Required"),
	description: yup.string().required("Required"),
	vendor: yup.string(),
	phone: yup.number(),
	costPrice: yup.number().required("Cost price"),
	salesPrice: yup.number().required("Sales price"),
};

export default validationsForm;
