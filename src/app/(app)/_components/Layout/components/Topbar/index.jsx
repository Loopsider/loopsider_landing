/* eslint-disable react/jsx-fragments */
import * as React from "react"
import {useEffect, useState} from "react"
import Button from "@mui/material/Button"
import {styled} from "@mui/material/styles"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Image from "next/image"
import "./NavBar.css"

// @ts-ignore
import logo from "../../../../../../../public/img/logo_loopsider.png"

import UserForm from "../Form"

const BootstrapDialog = styled(Dialog)(({theme}) => ({
	"& .MuiDialogActions-root": {
		padding: theme.spacing(1),
	},
}))

export default function CustomizedDialogs() {
	const [open, setOpen] = React.useState(false)
	const [visible, setVisible] = useState(false)

	const handleClickOpen = () => {
		setOpen(true)
	}
	const handleClose = () => {
		setOpen(false)
	}

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setVisible(true)
		} else {
			setVisible(false)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<React.Fragment>
			<div className={`flex justify-between items-center p-3 sticky-nav ${visible ? "visible" : ""}`}>
				<Image className="h-full" src={logo} alt="loopsider logo" />
				<Button
					style={{
						backgroundColor: "black",
						color: "white",
						borderRadius: "50px",
						padding: "10px 20px",
						textTransform: "none",
						fontWeight: "bold",
						border: "none",
					}}
					onClick={handleClickOpen}
				>
					Nous contacter
				</Button>
			</div>

			{/* <Button onClick={handleClickOpen} style={{backgroundColor: "var(--pink-color)"}} className="my-4 text-white hover:scale-105 duration-200 font-semibold py-2 px-4 rounded-lg">
				{firstletter}
				<div className="lowercase">{title}</div>
			</Button> */}

			<BootstrapDialog
				onClose={handleClose}
				aria-labelledby="customized-dialog-title"
				open={open}
				PaperProps={{
					sx: {
						borderRadius: "30px",
						padding: "2rem 1rem",
						maxWidth: "100%",
					},
				}}
			>
				<DialogTitle className="md:pl-9 p-0" sx={{m: 0, p: 2, pl: "56px"}} id="customized-dialog-title">
					<p className="font-semibold text-2xl md:text-left text-center">Demander une démo</p>
				</DialogTitle>
				<IconButton
					aria-label="close"
					onClick={handleClose}
					className="md:flex hidden"
					sx={{
						position: "absolute",
						right: 38,
						top: 38,
					}}
				>
					<CloseIcon />
				</IconButton>
				<DialogContent
					dividers
					className="md:p-9 p-0"
					sx={{
						display: "flex",
					}}
				>
					<UserForm handleClose={handleClose} />
					{/* <Image className="md:flex hidden" src={contactIphone} alt="contact image" /> */}
				</DialogContent>
			</BootstrapDialog>
		</React.Fragment>
	)
}
