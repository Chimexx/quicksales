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
} from "@material-ui/core";

import { useStyles } from "./NewItem.styles";
import React, { useState } from "react";
import DatePicker from "../../components/Utils/DatePicker";

const NewItem = () => {
	const classes = useStyles();
	const [input, setInput] = useState([]);

	return (
		<Container className={classes.containerRight}>
			<Container className={classes.new}>
				<Typography variant="h6" className={classes.new_head} component="h6" gutterBottom>
					Create New Item
				</Typography>
				<Container className={classes.body}>
					<Container className={classes.new_small_input}>
						<TextField
							id="filled-basic"
							variant="filled"
							fullWidth={true}
							size="small"
							name="itemName"
							placeholder="Item Name"
							className={classes.new__input}
						/>
						<TextField
							id="description"
							variant="filled"
							fullWidth={true}
							size="small"
							name="description"
							placeholder="Item Description"
							className={classes.new__input}
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
								// value={age}
								// onChange={handleChange}
							>
								<MenuItem value="">
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
								// value={age}
								// onChange={handleChange}
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
				<Button size="small" style={{ marginRight: 20 }} variant="contained" color="primary">
					Create Item
				</Button>
				<Button size="small" style={{ marginRight: 20 }}>
					Cancel
				</Button>
			</CardActions>
		</Container>
	);
};

export default NewItem;
