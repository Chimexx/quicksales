import { Button, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useStyles } from "./Departments.styles";
import { useDispatch, useSelector } from "react-redux";
import Progress from "../../components/Utils/Progress";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { fetchDepartments } from "../../redux/departmentsApi";

const Departments = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		fetchDepartments(dispatch);
	}, [dispatch]);
	const { departmentList, isFetching_dep } = useSelector((state) => state.departments);

	return (
		<>
			<div className={classes.container}>
				{isFetching_dep && <Progress />}
				<Typography variant="h6" className={classes.header} component="h6" gutterBottom>
					Department List
				</Typography>

				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table size="small" aria-label="a dense table" className={classes.table}>
						<TableHead>
							<TableRow className={classes.tableHead}>
								<TableCell className={classes.tableHead}>#</TableCell>
								<TableCell className={classes.tableHead}>Department</TableCell>
								<TableCell className={classes.tableHead}>Edit</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{departmentList.map((row, index) => (
								<TableRow className={classes.table__row} key={row._id}>
									<TableCell align="left">{index + 1}</TableCell>
									<TableCell component="th" scope="row">
										<div style={{ display: "flex", alignItems: "center" }}>
											{row.department.length > 30
												? row.department.slice(0, 30) + "..."
												: row.department}
										</div>
									</TableCell>
									<TableCell>
										<Link to={"/department/" + row._id}>
											<Button size="small" variant="outlined" color="secondary">
												edit
											</Button>
										</Link>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</div>
		</>
	);
};

export default Departments;
