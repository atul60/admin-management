import { Box } from "@mui/material";
import CustomButton from "../common/btn/CustomButton";
import CustomInput from "../common/input/CustomInput";
import { tableData } from "../data/table";

const NewMemberForm = (props) => {

	return (
		<Box component="form" onSubmit={props.onSubmit} noValidate sx={{ mt: 1 }}>
            <CustomInput
				id="name"
				label="Full Name"
				autoComplete="name"
				autoFocus
				name="name"
				disabled={false}
				value={props.newMemberData.name}
				onChange={props.onChange}
			/>
			<CustomInput
				id="email"
				label="Email"
				autoComplete="email"
				autoFocus
				name="email"
				disabled={false}
				value={props.newMemberData.email}
				onChange={props.onChange}
			/>
			<CustomInput
				id="address"
				label="Address"
				autoComplete="address"
				autoFocus
				name="address"
				disabled={false}
				value={props.newMemberData.address}
				onChange={props.onChange}
			/>
			<CustomInput
				id="organization"
				label="Last Name"
				autoComplete="organization"
				autoFocus
				name="organization"
				disabled={false}
				value={props.newMemberData.organization}
				onChange={props.onChange}
			/>

			<CustomInput
				id="mobile"
				label="Mobile"
				autoComplete="mobile"
				autoFocus
				name="mobile"
				disabled={false}
				value={props.newMemberData.mobile}
				onChange={props.onChange}
			/>

			<CustomInput
				id="designation"
				label="Designation"
				autoComplete="designation"
				name="designation"
				disabled={props.is_loading}
				value={props.newMemberData.designation}
				onChange={props.onChange}
			/>
			<CustomButton
				title="New Member"
				type="submit"
				sx={{ mt: 3, mb: 2 }}
			>
				Add Member
			</CustomButton>
		</Box>
	);
};

export default NewMemberForm;