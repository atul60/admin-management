import { Box } from "@mui/material";
import CustomButton from "../common/btn/CustomButton";
import CustomInput from "../common/input/CustomInput";
import { tableData } from "../data/table";

const EditMemberForm = (props) => {

	return (
		<Box component="form" onSubmit={props.onSubmit} noValidate sx={{ mt: 1 }}>
            <CustomInput
				id="member_id"
				label="Member ID"
				autoComplete="name"
				autoFocus
				name="member_id"
				disabled={true}
				onChange={props.onChange}
                defaultValue={props.editData.member_id}
			/>
            <CustomInput
				id="name"
				label="Full Name"
				autoComplete="name"
				autoFocus
				name="name"
				disabled={false}
				onChange={props.onChange}
                defaultValue={props.editData.name}
			/>
			<CustomInput
				id="email"
				label="Email"
				autoComplete="email"
				autoFocus
				name="email"
				disabled={false}
				onChange={props.onChange}
                defaultValue={props.editData.email}
			/>
			<CustomInput
				id="address"
				label="Address"
				autoComplete="address"
				autoFocus
				name="address"
				disabled={false}
				onChange={props.onChange}
                defaultValue={props.editData.address}
			/>
			<CustomInput
				id="organization"
				label="Last Name"
				autoComplete="organization"
				autoFocus
				name="organization"
				disabled={false}
				onChange={props.onChange}
                defaultValue={props.editData.organization}
			/>

			<CustomInput
				id="mobile"
				label="Mobile"
				autoComplete="mobile"
				autoFocus
				name="mobile"
				disabled={false}
				onChange={props.onChange}
                defaultValue={props.editData.contact}
			/>

			<CustomInput
				id="designation"
				label="Designation"
				autoComplete="designation"
				name="designation"
				disabled={props.is_loading}
				onChange={props.onChange}
                defaultValue={props.editData.designation}
			/>
			<CustomButton
				title="Edit Member"
				type="submit"
				sx={{ mt: 3, mb: 2 }}
			>
				Edit Member
			</CustomButton>
		</Box>
	);
};

export default EditMemberForm;