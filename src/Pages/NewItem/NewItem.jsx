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
import { useStyles } from "./NewItem.styles";
import React, { useEffect, useState } from "react";
import DatePicker from "../../components/Utils/DatePicker";
import Progress from "../../components/Utils/Progress";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../redux/productsApi";
import { fetchVendors } from "../../redux/vendorsApi";
import { fetchDepartments } from "../../redux/departmentsApi";
import AddModal from "../../components/AddModal/AddModal";
import { Link } from "react-router-dom";

const NewItem = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [expiryDate, setExpiryDate] = useState(new Date());
	const [input, setInput] = useState([]);
	const [isValid, setIsValid] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);
	const [type, setType] = useState("");

	useEffect(() => {
		fetchVendors(dispatch);
		fetchDepartments(dispatch);
	}, [dispatch]);

	const { vendorList, isFetching_ven } = useSelector((state) => state.vendors);
	const { departmentList, isFetching_dep } = useSelector((state) => state.departments);

	const handleChange = async (e) => {
		setInput({ ...input, [e.target.name]: e.target.value.toLowerCase() });
	};
	const handleNumChange = async (e) => {
		setInput({ ...input, [e.target.name]: parseInt(e.target.value) });
		if (input.itemName && input.salesPrice && input.costPrice && input.description && input.onHandQty) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};
	const handleModal = (action) => {
		if (action === "dep") setType("dep");
		if (action === "vendor") setType("vendor");
		setModalOpen(true);
	};
	const date = new Date();
	const expiry = expiryDate.getFullYear() + "-" + (expiryDate.getMonth() + 1) + "-" + expiryDate.getDate();
	const today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

	const createItem = async () => {
		if (isValid) {
			const data = { ...input, expiryDate: today === expiry ? "" : expiryDate };
			createProduct(dispatch, data);
			setInput([]);
		}
	};

	return (
		<div className={classes.container}>
			<div className={classes.wrapper}>
				<Container className={classes.new}>
					{(isFetching_ven || isFetching_dep) && <Progress />}
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Add New Item
					</Typography>
					<Container className={classes.body}>
						<Container className={classes.new_small_input}>
							<TextField
								id="filled-basic"
								variant="filled"
								fullWidth={true}
								size="small"
								name="itemName"
								label="Item Name"
								className={classes.new__input}
								value={input.itemName ?? ""}
								onChange={handleChange}
								required
								error={!input.itemName}
								helperText={!input.itemName && "Field required"}
							/>
							<TextField
								id="description"
								variant="filled"
								fullWidth={true}
								size="small"
								name="description"
								label="Item Description"
								className={classes.new__input}
								value={input.description ?? ""}
								onChange={handleChange}
								required
								error={!input.description}
								helperText={!input.description && "Field required"}
							/>
							<TextField
								id="onHandQty"
								variant="filled"
								fullWidth={true}
								size="small"
								name="onHandQty"
								label="On-Hand Qty"
								className={classes.new__input}
								value={input.onHandQty ?? ""}
								onChange={handleNumChange}
								required
								type="number"
								error={!input.onHandQty}
								helperText={!input.onHandQty && "Field required"}
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
								value={input.salesPrice ?? ""}
								onChange={handleNumChange}
								required
								min="0"
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
								value={input.costPrice ?? ""}
								onChange={handleNumChange}
								required
								min="0"
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
								min="0"
								className={classes.new__input}
								value={input.wholesalePrice ?? ""}
								onChange={handleNumChange}
							/>

							<TextField
								id="retailPrice"
								variant="filled"
								size="small"
								name="retailPrice"
								fullWidth={true}
								label="Retail Price"
								type="number"
								min="0"
								className={classes.new__input}
								value={input.retailPrice ?? ""}
								onChange={handleNumChange}
							/>

							<FormControl
								variant="filled"
								size="small"
								className={(classes.formControl, classes.new__input)}
							>
								<InputLabel id="vendor">Vendor</InputLabel>
								<Select labelId="vendor" id="vendor" name="vendor" onChange={handleChange}>
									<MenuItem selected value="system">
										<em>None</em>
									</MenuItem>
									{vendorList?.map((vendor) => (
										<MenuItem key={vendor.company} value={vendor.company}>
											{vendor.company.toUpperCase()}
										</MenuItem>
									))}
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
									onChange={handleChange}
								>
									<MenuItem selected value="system">
										<em>None</em>
									</MenuItem>

									{departmentList?.map((dep) => (
										<MenuItem key={dep.department} value={dep.department}>
											{dep.department.toUpperCase()}
										</MenuItem>
									))}
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
						disabled={!isValid || isFetching_ven || isFetching_dep}
					>
						Create Item
					</Button>
					<Link to="/home">
						<Button size="small" color="default">
							Cancel
						</Button>
					</Link>
				</CardActionArea>
				{modalOpen && <AddModal type={type} setModalOpen={setModalOpen} />}
			</div>
		</div>
	);
};

export default NewItem;
