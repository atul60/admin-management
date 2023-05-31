import { useMemo, useRef, useState } from "react";
import CustomTable from "../components/common/table/CustomTable";
import {tableColumn} from '../components/data/table'
import CustomButton from "../components/common/btn/CustomButton";
import { TextField } from "@mui/material";
import CustomModal from "../components/common/modal/CustomModal";
import NewMemberForm from "../components/form/NewMemberForm";
import EditMemberForm from "../components/form/EditMemberForm";
import { useDispatch, useSelector } from "react-redux";
import { addNewMember, editMember } from "../redux/action";
import Header from "../components/header/Header";

function HomePage() {
  const data = useSelector((state) => state.reducers.tableData)
  const [searchData, setSearchData] = useState('');
  const [sortedData, setSortedData] = useState(data);
  const [newMemberOpen, setNewMemberOpen] = useState(false);
  const newMemberModalOpen = () => setNewMemberOpen(true);
  const newMemberModalClose = () => setNewMemberOpen(false);
  const [newMemberData, setNewMemberData] = useState({
    name: '',
    email: '',
    address: '',
    organization: '',
    mobile: '',
    designation: '',
  });
  
  const resetNewMemberForm = () => {
    setNewMemberData({
      name: '',
      email: '',
      address: '',
      organization: '',
      mobile: '',
      designation: '',
    })
  }
  
  const [editMemberOpen, setEditMemberOpen] = useState(false);
  const editMemberModalClose = () => setEditMemberOpen(false);
  const [editData, setEditData] = useState({});
  const [editedDataIndex, setEditedDataIndex] = useState(null);
  
  const dispatch = useDispatch();
  
  //New Member Form Function
  const handleSearchChange = (e) => {
    setSearchData(e.target.value);
    const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSortedData(filteredData);
  };
  
  const handleSort = (column) => {
    const sorted = [...sortedData].sort((a, b) => a[column] > b[column] ? 1 : -1);
    setSortedData(sorted);
  };
  
  function onAddNewMemberSubmit(e) {
    e.preventDefault();
    newMemberData.member_id = generateMemberId();
    setSortedData([...data, newMemberData])
    dispatch(addNewMember(newMemberData));
    newMemberModalClose()
    resetNewMemberForm();
  }
  
  function handleAddNewMemberChange(e) {
    setNewMemberData({...newMemberData, [e.currentTarget.name]: e.currentTarget.value})
  }
  
  //Edit Member Form Function
  function handleEditMember(row, index) {
    setEditData(row);
    setEditedDataIndex(index);
    setEditMemberOpen(true);
  }
  
  function onEditMemberSubmit(e) {
    e.preventDefault();
    dispatch(editMember([editedDataIndex, {...editData}]));  
    editMemberModalClose()
  }
  
  function handleEditMemberChange(e) {
    setEditData({...editData, [e.currentTarget.name]: e.currentTarget.value})
  }
  
  const generateRandomString = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
  
  const generateMemberId = () => {
    const randomNum = Math.floor(Math.random() * 900) + 100;
    const randomStr = generateRandomString(3);
    return randomStr + randomNum;
  }
  
  
  return (
    <>
    <Header />
    <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px 2px'}}>
    <TextField
    label="Search"
    value={searchData}
    onChange={handleSearchChange}
    size="small"
    />
    <CustomButton sx={{width: 'auto'}} onClick={newMemberModalOpen}>Add New Member</CustomButton>
    </div>
    <CustomTable  
    searchData={searchData} 
    setSearchData={setSearchData} 
    sortedData={sortedData} 
    setSortedData={setSortedData} 
    handleSort={handleSort}
    handleEditMember={handleEditMember}
    />
    <CustomModal
    title='Enter Your Details'
    open={newMemberOpen}
    onClose={newMemberModalClose} actionElement={undefined} 
    bodyElement={<NewMemberForm 
      onSubmit={onAddNewMemberSubmit} 
      onChange={handleAddNewMemberChange} 
      newMemberData={newMemberData}
      />}    
      />
      <CustomModal
      title='Edit Your Details'
      open={editMemberOpen}
      onClose={editMemberModalClose} actionElement={undefined} 
      bodyElement={
        <EditMemberForm 
        onSubmit={onEditMemberSubmit} 
        onChange={handleEditMemberChange} 
        editData={editData}
        />
      }    
      />
      </>
      )
    }
    
    export default HomePage;