import {
	Button,
	Typography,
	Container,
	TextField,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	CardActionArea,
	Divider,
} from "@material-ui/core";
import newItemSchema from "../../validations/validationSchema";
import { useStyles } from "./NewItem.styles";
import React, { useState } from "react";
import DatePicker from "../../components/Utils/DatePicker";
import AddModal from "../AddModal/AddModal";
import Progress from "../Utils/Progress";

const NewItem = () => {
	const classes = useStyles();
	const [expiryDate, setExpiryDate] = useState(new Date());
	const [input, setInput] = useState([]);
	const [isValid, setIsValid] = useState(false);
	const [loading, setLoading] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [type, setType] = useState("");

	const handleChange = async (e) => {
		setInput({ ...input, [e.target.name]: e.target.value });
		setIsValid(await newItemSchema.isValid(input));
	};

	const handleModal = (action) => {
		if (action === "dep") setType("dep");
		if (action === "vendor") setType("vendor");
		setModalOpen(true);
	};

	const date = new Date();
	const expiry = expiryDate.getFullYear() + "-" + (expiryDate.getMonth() + 1) + "-" + expiryDate.getDate();
	const today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

	const createItem = async (e) => {
		e.preventDefault();

		if (isValid) {
			const data = { ...input, expiryDate: today === expiry ? "" : expiryDate };
			console.log(data);
		}
	};

	return (
		<Container className={classes.containerRight}>
			<Container className={classes.new}>
				{loading && <Progress />}
				<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
					Create New Item
				</Typography>
				<Container className={classes.body}>
					<TextField
						id="filled-basic"
						variant="filled"
						fullWidth={true}
						size="small"
						name="itemName"
						label="Item Name"
						className={classes.new__input}
						value={input.itemName}
						onChange={handleChange}
						required
						error={!input.itemName}
						helperText={!input.itemName && "Field required"}
					/>
					<Container className={classes.new_small_input}>
						<TextField
							id="description"
							variant="filled"
							fullWidth={true}
							size="small"
							name="description"
							label="Item Description"
							className={classes.new__input}
							value={input.description}
							onChange={handleChange}
							required
							error={!input.description}
							helperText={!input.description && "Field required"}
						/>

						<TextField
							id="salesPrice"
							variant="filled"
							size="small"
							name="salesPrice"
							fullWidth={true}
							label="Item Sales Price"
							type="number"
							className={classes.new__input}
							value={input.salesPrice}
							onChange={handleChange}
							required
							error={!input.salesPrice}
							helperText={!input.salesPrice && "Field required"}
						/>
						<TextField
							id="costPrice"
							variant="filled"
							fullWidth={true}
							size="small"
							name="costPrice"
							label="Item Cost Price"
							type="number"
							className={classes.new__input}
							value={input.costPrice}
							onChange={handleChange}
							required
							error={!input.costPrice}
							helperText={!input.costPrice && "Field required"}
						/>
						<TextField
							id="wholesalePrice"
							variant="filled"
							size="small"
							name="wholesalePrice"
							fullWidth={true}
							label="Wholesale Price"
							type="number"
							className={classes.new__input}
							value={input.wholesalePrice}
							onChange={handleChange}
						/>

						<TextField
							id="customPrice"
							variant="filled"
							size="small"
							name="customPrice"
							fullWidth={true}
							label="Custom Price"
							type="number"
							className={classes.new__input}
							value={input.customPrice}
							onChange={handleChange}
						/>

						<FormControl
							variant="filled"
							size="small"
							className={(classes.formControl, classes.new__input)}
						>
							<InputLabel id="vendor">Vendor</InputLabel>
							<Select
								labelId="vendor"
								id="vendor"
								name="vendor"
								value={input.vendor}
								onChange={handleChange}
							>
								<MenuItem value="system">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>GSK</MenuItem>
								<MenuItem value={20}>Hovid</MenuItem>
								<MenuItem value={30}>Laborate</MenuItem>
							</Select>
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
								value={input.department}
								onChange={handleChange}
							>
								<MenuItem value="system">
									<em>None</em>
								</MenuItem>
								<MenuItem value={10}>Anti-Malarial</MenuItem>
								<MenuItem value={20}>Anti-Biotics</MenuItem>
								<MenuItem value={30}>Creams</MenuItem>
							</Select>
						</FormControl>

						<DatePicker setExpiryDate={setExpiryDate} expiryDate={expiryDate} />
					</Container>
				</Container>

				<Divider />
				<Button
					onClick={() => handleModal("dep")}
					className={classes.add__buttons}
					size="small"
					variant="outlined"
					color="primary"
					style={{ margin: 10 }}
				>
					Add Department
				</Button>
				<Button
					onClick={() => handleModal("vendor")}
					className={classes.add__buttons}
					size="small"
					variant="outlined"
					color="primary"
					style={{ margin: 10 }}
				>
					Add Vendor
				</Button>
			</Container>

			<CardActionArea className={classes.actions}>
				<Button
					className={classes.action__buttons}
					size="small"
					variant="outlined"
					color="primary"
					onClick={createItem}
					disabled={!isValid}
				>
					Create Item
				</Button>
			</CardActionArea>
			{modalOpen && <AddModal type={type} setModalOpen={setModalOpen} />}
		</Container>
	);
};

export default NewItem;
