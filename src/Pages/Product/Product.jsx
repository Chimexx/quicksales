import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
// import DatePicker from "../../components/Utils/DatePicker";
import Progress from "../../components/Utils/Progress";
import { useStyles } from "./Product.styles";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";

import { deleteProduct, updateProduct } from "../../redux/productsApi";
import { fetchVendors } from "../../redux/vendorsApi";
import { fetchDepartments } from "../../redux/departmentsApi";

const Product = () => {
	const location = useLocation();
	let navigate = useNavigate();
	const id = location.pathname.split("/")[2];

	const { productList, isFetching } = useSelector((state) => state.products);
	const { vendorList, isFetching_ven } = useSelector((state) => state.vendors);
	const { departmentList, isFetching_dep } = useSelector((state) => state.departments);
	const product = productList.find((product) => product._id === id);

	const classes = useStyles();
	const dispatch = useDispatch();
	const [expiryDate, setExpiryDate] = useState(
		product.expiryDate === "" ? new Date() : new Date(product.expiryDate)
	);

	const [open, setOpen] = React.useState(false);
	const [itemName, setItemName] = useState(product.itemName);
	const [description, setDescription] = useState(product.description);
	const [availQty, setAvailQty] = useState(product.availQty);
	const [salesPrice, setSalesPrice] = useState(product.salesPrice);
	const [costPrice, setCostPrice] = useState(product.costPrice);
	const [wholesalePrice, setWholesalePrice] = useState(product.wholesalePrice);
	const [retailPrice, setRetailPrice] = useState(product.retailPrice);
	const [vendor, setVendor] = useState(product.vendor);
	const [department, setDepartment] = useState(product.department);

	useEffect(() => {
		fetchVendors(dispatch);
		fetchDepartments(dispatch);
	}, [dispatch]);

	const date = new Date();
	// default exp date
	const expiry =
		expiryDate?.getFullYear() + "-" + (expiryDate?.getMonth() + 1) + "-" + expiryDate?.getDate();
	//today's date
	const today = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
	const isExpiry = expiry > today;

	const checkValidity = () => {
		if (itemName && salesPrice && costPrice && description && availQty) {
			return true;
		} else {
			return false;
		}
	};

	const data = {
		_id: product._id,
		itemName,
		description,
		availQty,
		salesPrice,
		costPrice,
		wholesalePrice,
		retailPrice,
		vendor,
		department,
		expiryDate: isExpiry ? expiryDate : "",
	};
	const handleSave = async () => {
		updateProduct(data, dispatch);
	};
	const handleDelete = () => {
		deleteProduct(id, dispatch);
		navigate("/products", { replace: true });
	};
	const handleBack = () => {
		navigate("/products", { replace: true });
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.container}>
				<Container className={classes.new}>
					<div className={classes.header}>
						{(isFetching_ven || isFetching_dep || isFetching) && <Progress />}
						<Typography variant="h6" className={classes.title} component="h6" gutterBottom>
							Editing Item
						</Typography>
					</div>
					<Container className={classes.body}>
						<form className={classes.new_small_input} autoComplete="off">
							<TextField
								id="filled-basic"
								variant="filled"
								fullWidth={true}
								size="small"
								name="itemName"
								label="Item Name"
								className={classes.new__input}
								value={itemName}
								onChange={(e) => setItemName(e.target.value)}
								required
							/>

							<TextField
								id="description"
								variant="filled"
								fullWidth={true}
								size="small"
								name="description"
								label="Item Description"
								className={classes.new__input}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								required
							/>
							<TextField
								id="availQty"
								variant="filled"
								fullWidth={true}
								size="small"
								name="availQty"
								label="Avail. Qty"
								className={classes.new__input}
								value={availQty}
								onChange={(e) => setAvailQty(parseInt(e.target.value))}
								required
								type="number"
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
								value={salesPrice}
								onChange={(e) => setSalesPrice(parseInt(e.target.value))}
								required
								min="0"
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
								value={costPrice}
								onChange={(e) => setCostPrice(parseInt(e.target.value))}
								required
								min="0"
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
								value={wholesalePrice}
								onChange={(e) => setWholesalePrice(parseInt(e.target.value))}
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
								value={retailPrice}
								onChange={(e) => setRetailPrice(parseInt(e.target.value))}
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
									value={product.vendor}
									onChange={(e) => setVendor(e.target.value)}
								>
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
									value={product.department}
									onChange={(e) => setDepartment(e.target.value)}
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
							<DatePicker
								className={classes.date}
								selected={expiryDate}
								onChange={(date) => setExpiryDate(date)}
							/>
						</form>
					</Container>
				</Container>

				<CardActions className={classes.actions}>
					<div>
						<Button
							className={classes.action__buttons}
							size="small"
							variant="outlined"
							color="primary"
							onClick={handleSave}
							disabled={isFetching_ven || isFetching_dep || !checkValidity() || isFetching}
						>
							Update Product
						</Button>

						<Button size="small" color="default" onClick={handleBack}>
							Cancel
						</Button>
					</div>

					<Button
						variant="outlined"
						color="primary"
						className={classes.delete__button}
						size="small"
						onClick={() => setOpen(true)}
						disabled={isFetching_ven || isFetching_dep || !checkValidity() || isFetching}
					>
						Delete
					</Button>
					<Dialog
						open={open}
						onClose={() => setOpen(false)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">{"Delete product?"}</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								Are you sure you want to delete {product.itemName}?
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setOpen(false)} color="primary">
								Cancel
							</Button>
							<Button onClick={handleDelete} className={classes.delete__button} autoFocus>
								Delete
							</Button>
						</DialogActions>
					</Dialog>
				</CardActions>
			</div>
		</div>
	);
};

export default Product;
