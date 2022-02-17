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
	CardActionArea,
} from "@material-ui/core";
import "date-fns";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DatePicker from "../../components/Utils/DatePicker";

const useStyles = makeStyles((theme) => ({
	new_head: {
		fontSize: 18,
		padding: "0 10px",
		color: theme.palette.primary.white,
		backgroundColor: theme.palette.primary.lightBlue,
		marginBottom: 0,
	},

	containerRight: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		width: "35%",
		padding: 0,
		height: "100%",
		borderRadius: "5px 5px 0 0",
		border: `1px solid ${theme.palette.secondary.main}`,
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
		padding: 10,
		justifyContent: "space-between",
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
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.primary.white,
		padding: 10,
	},
}));
const NewItem = () => {
	const classes = useStyles();

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
							placeholder="Item Name"
							className={classes.new__input}
						/>
						<TextField
							id="filled-basic"
							variant="filled"
							fullWidth={true}
							size="small"
							placeholder="Item Description"
							className={classes.new__input}
						/>
						<FormControl
							variant="filled"
							size="small"
							className={(classes.formControl, classes.new__input)}
						>
							<InputLabel id="demo-simple-select-filled-label">Vendor</InputLabel>
							<Select
								labelId="demo-simple-select-filled-label"
								id="demo-simple-select-filled"
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
							<InputLabel id="demo-simple-select-filled-label">Department</InputLabel>
							<Select
								labelId="demo-simple-select-filled-label"
								id="demo-simple-select-filled"
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
							id="filled-basic"
							variant="filled"
							fullWidth={true}
							size="small"
							type="number"
							placeholder="Vendor Phone "
							className={classes.new__input}
						/>
						<TextField
							id="filled-basic"
							variant="filled"
							fullWidth={true}
							size="small"
							placeholder="Item Cost Price"
							type="number"
							className={classes.new__input}
						/>
						<TextField
							id="filled-basic"
							variant="filled"
							size="small"
							fullWidth={true}
							placeholder="Item Sales Price"
							type="number"
							className={classes.new__input}
						/>
						<TextField
							id="filled-basic"
							variant="filled"
							fullWidth={true}
							size="small"
							type="number"
							placeholder="On-Hand Quantity"
							className={classes.new__input}
						/>
						<TextField
							id="filled-basic"
							variant="filled"
							size="small"
							fullWidth={true}
							placeholder="Find Items"
							className={classes.new__input}
						/>
						<DatePicker />
					</Container>
				</Container>
			</Container>
			<CardActionArea className={classes.actions}>
				<Button size="small" style={{ marginRight: 20 }} variant="contained" color="primary">
					Create Item
				</Button>
				<Button size="small" style={{ marginRight: 20 }} variant="default">
					Cancel
				</Button>
			</CardActionArea>
		</Container>
	);
};

export default NewItem;
