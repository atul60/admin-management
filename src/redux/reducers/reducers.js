const initialState = {
    'tableData': [
        {
            member_id: 'ATUL12',
            name: 'Atul',
            email: 'satul388@gmail.com',
            address: 'Bihar',
            organization: 'Synoriq',
            designation: 'Software Developer',
            contact: '8368833419'
        },
        {
            member_id: 'FDS213',
            name: 'Dinesh',
            email: 'dinesh@gmail.com',
            address: 'Bhopal',
            organization: 'Facebook',
            designation: 'Software Tester',
            contact: '4567834567'
        },
        {
            member_id: 'QWRE43',
            name: 'Prakash',
            email: 'pakash@gmail.com',
            address: 'Uttar Pradesh',
            organization: 'Quokkalabs',
            designation: 'Software Developer',
            contact: '6789056789'
        },
        {
            member_id: 'DS2365',
            name: 'Mayank',
            email: 'mayank@gmail.com',
            address: 'Rajasthan',
            organization: 'Google',
            designation: 'Support Task',
            contact: '234523453'
        }
      ],
    'isLoggedIn': localStorage.getItem('isLoggedIn')
};

export const reducers = (state = initialState, action) => { //
    // debugger
    console.log("calling reducers", action.payload);
    
    switch(action.type){
        case 'add_new_member':
            return {...state, tableData : [...state.tableData, action.payload]}; 
        case 'edit_member':
            return {...state, tableData: [...state.tableData, state.tableData[action.payload[0]] = action.payload[1]]};
        case 'loggin':
            return {...state, isLoggedIn: action.payload}
        default: return state;
    }   
}