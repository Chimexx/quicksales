import { Button, Typography, Container, TextField, CardActionArea } from "@material-ui/core";
import "date-fns";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InventoryList from "../InventoryList/InventoryList";
import FilterDisplay from "../FilterDisplay/FilterDisplay";

const useStyles = makeStyles((theme) => ({
	new_head: {
		fontSize: 18,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.lightBlue,
		marginBottom: 0,
	},

	containerLeft: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "65%",
		padding: 0,
		height: "100%",
		borderRadius: "5px 5px 0 0",
		border: `1px solid ${theme.palette.secondary.main}`,
		marginRight: 20,
	},

	new: {
		width: "100%",
		height: "30px",
		color: theme.palette.primary.darkGray,
		padding: 0,
		margin: 0,
	},
	body: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		padding: 0,
		height: "100%",
		justifyContent: "space-between",
	},
	inner__body: {
		padding: 10,
	},
	new__input: {
		width: "100%",
		marginBottom: "10px ",
	},
	new_small_input: {
		width: "100%",
		display: "grid",
		padding: 0,
		gridTemplateColumns: "repeat(2, 1fr)",
		gap: 2,
	},
	actions: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.white,
		padding: 10,
	},
	table__container: {
		maxHeight: 300,
		width: "100%",
		padding: 0,
		margin: "10px 0",
		overflow: "auto",
	},
	totals: {
		backgroundColor: theme.palette.primary.orange,
		borderRadius: 5,
		padding: "3px 10px",
		width: "200px",
		height: 30,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	total_field: {
		fontSize: 20,
		fontWeight: 700,
	},
	action__buttons: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.white,
	},
}));

const data = [
	{
		id: 0,
		name: "Ciprofloxacin",
		ohq: 1,
		description: "Ciprotab 500mg",
		salesPrice: 2000,
		costPrice: 1500,
		availQty: 20,
		wholesalePrice: 1700,
		customPrice: 1900,
	},
	{
		id: 1,
		name: "Paracetamol",
		ohq: 1,
		description: "Paracetamol 100mg",
		salesPrice: 100,
		costPrice: 70,
		availQty: 200,
		wholesalePrice: 70,
		customPrice: 95,
	},
	{
		id: 2,
		name: "Gentamycin",
		ohq: 1,
		description: "Gentamycin inj 60mg",
		salesPrice: 3000,
		costPrice: 2000,
		availQty: 90,
		wholesalePrice: 2700,
		customPrice: 2900,
	},
];

const ReceiveItem = () => {
	const classes = useStyles();
	const [term, setTerm] = useState(null);
	const [inventory, setInventory] = useState([]);

	const dataFilter = () =>
		data.filter(
			(key) => key.name.toLowerCase().includes(term.toLowerCase()) || key.age === parseInt(term)
		);

	return (
		<Container className={classes.containerLeft}>
			<Container className={classes.body}>
				<Container className={classes.new}>
					<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
						Receive Item
					</Typography>
					<Container className={classes.inner__body}>
						<TextField
							className={classes.new__input}
							id="filled-basic"
							variant="filled"
							fullWidth={true}
							size="small"
							value={term}
							autoComplete="off"
							onChange={(e) => setTerm(e.target.value)}
							placeholder="Find Items"
						/>
						{term ? (
							<FilterDisplay
								data={dataFilter()}
								inventory={inventory}
								setInventory={setInventory}
							/>
						) : null}
						<Container className={classes.table__container}>
							<InventoryList inventory={inventory} setInventory={setInventory} />
						</Container>
					</Container>
				</Container>
				<CardActionArea className={classes.actions}>
					<Container>
						<Button
							size="small"
							className={classes.action__buttons}
							style={{ marginRight: 20 }}
							variant="outlined"
							color="primary"
						>
							Receive Item
						</Button>
						<Button size="small" style={{ marginRight: 20 }} variant="default">
							Cancel
						</Button>
					</Container>
					<Container style={{ display: "flex", alignItems: "center" }}>
						<p className={classes.total_field}>Total:</p>
						<Container className={classes.totals}>
							<p className={classes.total_field}>₦ 5,000</p>
						</Container>
					</Container>
				</CardActionArea>
			</Container>
		</Container>
	);
};

export default ReceiveItem;

// <Container className={classes.new_small_input}>
// 	<TextField
// 		id="filled-basic"
// 		variant="filled"
// 		fullWidth={true}
// 		size="small"
// 		placeholder="Item Name"
// 		className={classes.new__input}
// 	/>
// 	<TextField
// 		id="filled-basic"
// 		variant="filled"
// 		fullWidth={true}
// 		size="small"
// 		placeholder="Item Description"
// 		className={classes.new__input}
// 	/>
// 	<FormControl variant="filled" size="small" className={(classes.formControl, classes.new__input)}>
// 		<InputLabel id="demo-simple-select-filled-label">Vendor</InputLabel>
// 		<Select
// 			labelId="demo-simple-select-filled-label"
// 			id="demo-simple-select-filled"
// 			// value={age}
// 			// onChange={handleChange}
// 		>
// 			<MenuItem value="">
// 				<em>None</em>
// 			</MenuItem>
// 			<MenuItem value={10}>GSK</MenuItem>
// 			<MenuItem value={20}>Hovid</MenuItem>
// 			<MenuItem value={30}>Laborate</MenuItem>
// 		</Select>
// 	</FormControl>
// 	<FormControl variant="filled" size="small" className={(classes.formControl, classes.new__input)}>
// 		<InputLabel id="demo-simple-select-filled-label">Department</InputLabel>
// 		<Select
// 			labelId="demo-simple-select-filled-label"
// 			id="demo-simple-select-filled"
// 			// value={age}
// 			// onChange={handleChange}
// 		>
// 			<MenuItem value="">
// 				<em>None</em>
// 			</MenuItem>
// 			<MenuItem value={10}>Anti-Malarial</MenuItem>
// 			<MenuItem value={20}>Anti-Biotics</MenuItem>
// 			<MenuItem value={30}>Creams</MenuItem>
// 		</Select>
// 	</FormControl>

// 	<TextField
// 		id="filled-basic"
// 		variant="filled"
// 		fullWidth={true}
// 		size="small"
// 		type="number"
// 		placeholder="Vendor Phone No."
// 		className={classes.new__input}
// 	/>
// 	<TextField
// 		id="filled-basic"
// 		variant="filled"
// 		fullWidth={true}
// 		size="small"
// 		placeholder="Item Cost Price"
// 		type="number"
// 		className={classes.new__input}
// 	/>
// 	<TextField
// 		id="filled-basic"
// 		variant="filled"
// 		size="small"
// 		fullWidth={true}
// 		placeholder="Item Sales Price"
// 		type="number"
// 		className={classes.new__input}
// 	/>
// 	<TextField
// 		id="filled-basic"
// 		variant="filled"
// 		fullWidth={true}
// 		size="small"
// 		type="number"
// 		placeholder="On-Hand Quantity"
// 		className={classes.new__input}
// 	/>
// 	<TextField
// 		id="filled-basic"
// 		variant="filled"
// 		size="small"
// 		fullWidth={true}
// 		placeholder="Find Items"
// 		className={classes.new__input}
// 	/>
// 	<DatePicker />
// </Container>;
