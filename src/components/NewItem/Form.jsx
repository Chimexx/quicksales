import {
	Button,
	Typography,
	Container,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	CardActions,
	withStyles,
} from "@material-ui/core";
import { styles } from "./NewItem.styles";
import DatePicker from "../Utils/DatePicker";
import validationsForm from "../../validations/validationSchema";
import { withFormik } from "formik";
import * as yup from "yup";

const form = (props) => {
	// const [input, setInput] = useState([]);

	const {
		classes,
		values,
		touched,
		errors,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset,
	} = props;

	return (
		<Container className={classes.containerRight}>
			<Container className={classes.new}>
				<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
					Create New Item
				</Typography>
				<Container className={classes.body}>
					<Container className={classes.new_small_input}>
						<TextField
							id="itemName"
							variant="filled"
							fullWidth={true}
							size="small"
							name="itemName"
							placeholder="Item Name"
							className={classes.new__input}
							value={values.itemName}
							onChange={handleChange}
							onBlur={handleBlur}
							helperText={touched.itemName ? errors.itemName : ""}
							error={touched.itemName && Boolean(errors.itemName)}
						/>
						<TextField
							id="description"
							variant="filled"
							fullWidth={true}
							size="small"
							name="description"
							placeholder="Item Description"
							className={classes.new__input}
							value={values.description}
							onChange={handleChange}
							onBlur={handleBlur}
							helperText={touched.description ? errors.description : ""}
							error={touched.description && Boolean(errors.description)}
						/>
						<FormControl
							variant="filled"
							size="small"
							className={(classes.formControl, classes.new__input)}
						>
							<TextField
								variant="filled"
								fullWidth={true}
								size="small"
								className={classes.new__input}
								labelId="Vendor"
								id="vendor"
								name="vendor"
								value={values.vendor}
								defaultValue="system"
								onChange={handleChange}
								onBlur={handleBlur}
								helperText={touched.vendor ? errors.vendor : ""}
								error={touched.vendor && Boolean(errors.vendor)}
							/>
						</FormControl>
						<FormControl
							variant="filled"
							size="small"
							className={(classes.formControl, classes.new__input)}
						>
							<InputLabel id="department">Department</InputLabel>
							<Select
								labelId="department"
								id="department"
								name="department"
								value={values.department}
								onChange={handleChange}
								onBlur={handleBlur}
								helperText={touched.department ? errors.department : ""}
								error={touched.department && Boolean(errors.department)}
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Anti-Malarial</MenuItem>
								<MenuItem value={20}>Anti-Biotics</MenuItem>
								<MenuItem value={30}>Creams</MenuItem>
							</Select>
						</FormControl>

						<TextField
							id="phone"
							variant="filled"
							fullWidth={true}
							size="small"
							name="phone"
							type="number"
							placeholder="Vendor Phone "
							className={classes.new__input}
							value={values.phone}
							onChange={handleChange}
							onBlur={handleBlur}
							helperText={touched.phone ? errors.phone : ""}
							error={touched.phone && Boolean(errors.phone)}
						/>
						<TextField
							id="costPrice"
							variant="filled"
							fullWidth={true}
							size="small"
							name="costPrice"
							placeholder="Item Cost Price"
							type="number"
							className={classes.new__input}
							value={values.costPrice}
							onChange={handleChange}
							onBlur={handleBlur}
							helperText={touched.costPrice ? errors.costPrice : ""}
							error={touched.costPrice && Boolean(errors.costPrice)}
						/>
						<TextField
							id="salesPrice"
							variant="filled"
							size="small"
							name="salesPrice"
							fullWidth={true}
							placeholder="Item Sales Price"
							type="number"
							className={classes.new__input}
							value={values.salesPrice}
							onChange={handleChange}
							onBlur={handleBlur}
							helperText={touched.salesPrice ? errors.salesPrice : ""}
							error={touched.salesPrice && Boolean(errors.salesPrice)}
						/>
						{/* <TextField
							id="filled-basic"
							variant="filled"
							fullWidth={true}
							size="small"
							name
							type="number"
							placeholder="On-Hand Quantity"
							className={classes.new__input}
						/> */}

						<DatePicker />
					</Container>
				</Container>
			</Container>
			<CardActions className={classes.actions}>
				<Button
					size="small"
					style={{ marginRight: 20 }}
					variant="contained"
					color="primary"
					onClick={handleSubmit}
				>
					Create Item
				</Button>
				<Button size="small" style={{ marginRight: 20 }}>
					Cancel
				</Button>
			</CardActions>
		</Container>
	);
};
const Form = withFormik({
	mapPropsToValues: ({ itemName, vendor, description, department, phone, costPrice, salesPrice }) => {
		return {
			itemName: itemName || "",
			vendor: vendor || "",
			description: description || "",
			department: department || "",
			phone: phone || "",
			costPrice: costPrice || "",
			salesPrice: salesPrice || "",
		};
	},

	validationSchema: yup.object().shape(validationsForm),

	handleSubmit: (values, { setSubmitting }) => {
		setTimeout(() => {
			// submit to the server
			alert(JSON.stringify(values, null, 2));
			setSubmitting(false);
		}, 1000);
	},
})(form);

export default withStyles(styles)(Form);
