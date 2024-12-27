import {useEffect, useState} from "react";
import {Form, Input, Button, DatePicker, Select, SelectItem} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import Capture from "./capture";


const RegistrationPage = () => {
    const [data, setAction] = useState(null);
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let info = Object.fromEntries(new FormData(e.currentTarget));
        setAction(info);
        navigate('/capture', {state : {data : info}})

    }

    const container = 

    <div className="w-full h-[100vh] bg-[#ECF8FF] flex justify-center items-center">
        <div className="w-2/3 h-[90%] p-[2rem] bg-[#FFFFFF] rounded-[20px] overflow-auto">

            <Form
            className="w-full h-full flex flex-col gap-4 relative"
            validationBehavior="native"
            onSubmit={handleSubmit}
            >   
                
                {/* Personal Information */}
                <h4 className="text-[17px] font-semibold font-sans text-[#1b1b1b]">Personal Information</h4>

                <div className="w-full flex flex-col gap-6">

                    {/* 1st row */}
                    <div className="w-full flex flex-row gap-4">
                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="First Name"
                            labelPlacement="inside"
                            name="fname"
                            placeholder="Enter your first name"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Last Name"
                            labelPlacement="inside"
                            name="lname"
                            placeholder="Enter your last name"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Middle Name"
                            labelPlacement="inside"
                            name="mname"
                            placeholder="Enter your middle name"
                            type="text"
                        />

                        <DatePicker 
                            isRequired
                            className="max-w-[150px]" 
                            labelPlacement="inside"
                            label="Birth Date" 
                            name="dob"
                        />

                        <Select
                            isRequired
                            className="max-w-28"
                            errorMessage="Please fill out this field"
                            labelPlacement="inside"
                            label="Sex"
                            placeholder="Select"
                            variant="flat"
                            name="sex"
                        >
                            <SelectItem key='female'>Female</SelectItem>
                            <SelectItem key='male'>Male</SelectItem>
                        </Select>

                    </div>

                    {/* 2nd row */}
                    <div className="w-full flex flex-row gap-4">
                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Place of Birth"
                            labelPlacement="inside"
                            name="pob"
                            placeholder="Enter your place of birth"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Citizenship"
                            labelPlacement="inside"
                            name="citizen"
                            placeholder="Enter your citizenship"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Religion"
                            labelPlacement="inside"
                            name="religion"
                            placeholder="Enter your religion"
                            type="text"
                        />

                        <Select
                            isRequired
                            className="max-w-[140px]"
                            errorMessage="Please fill out this field"
                            labelPlacement="inside"
                            label="Marital Status"
                            placeholder="Select"
                            variant="flat"
                            name="marital"
                        >
                            <SelectItem key='single'>Single</SelectItem>
                            <SelectItem key='married'>Married</SelectItem>
                            <SelectItem key='widowed'>Widowed</SelectItem>
                        </Select>

                        <Input
                            className="max-w-[160px]"
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Weight"
                            labelPlacement="inside"
                            name="weight"
                            placeholder="Enter your weight"
                            type="number"
                        />

                    </div>

                    {/* 3rd row */}
                    <div className="w-full flex flex-row gap-4">

                        <Input
                            className="max-w-[160px]"
                            isRequired
                            errorMessage="Please enter a valid number"
                            label="Height"
                            labelPlacement="inside"
                            name="height"
                            placeholder="Enter your height"
                            type="number"
                        />
                        
                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Address"
                            labelPlacement="inside"
                            name="address"
                            placeholder="Enter your address"
                            type="text"
                        />

                        <Input
                            className="max-w-[160px]"
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Zip Code"
                            labelPlacement="inside"
                            name="zip"
                            placeholder="Enter your zip code"
                            type="number"
                        />

                        <Input
                            className="max-w-[200px]"
                            isRequired
                            errorMessage="Please enter a valid number"
                            label="Contact"
                            labelPlacement="inside"
                            name="contact"
                            placeholder="Enter your contact"
                            type="number"
                        />

                        <Input
                            className="max-w-[240px]"
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Occupation"
                            labelPlacement="inside"
                            name="occupation"
                            placeholder="Enter your occupation"
                            type="text"
                        />

                    </div>
                    
                </div>

                {/* Father's Information */}
                <h4 className="text-[17px] font-semibold font-sans text-[#1b1b1b]">Father's Information</h4>

                <div className="w-full flex flex-col gap-6">

                    {/* 1st row */}
                    <div className="w-full flex flex-row gap-4">
                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="First Name"
                            labelPlacement="inside"
                            name="Ffname"
                            placeholder="Enter first name"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Last Name"
                            labelPlacement="inside"
                            name="Flname"
                            placeholder="Enter last name"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Middle Name"
                            labelPlacement="inside"
                            name="Fmname"
                            placeholder="Enter middle name"
                            type="text"
                        />

                        <DatePicker 
                            isRequired
                            className="max-w-[150px]" 
                            labelPlacement="inside"
                            label="Birth Date" 
                            name="Fdob"
                        />
                    </div>

                    {/* 2nd row */}
                    <div className="w-full flex flex-row gap-4">
                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Place of Birth"
                            labelPlacement="inside"
                            name="Fpob"
                            placeholder="Enter place of birth"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Citizenship"
                            labelPlacement="inside"
                            name="Fcitizen"
                            placeholder="Enter citizenship"
                            type="text"
                        />

                        <Input
                            className="max-w-[200px]"
                            isRequired
                            errorMessage="Please enter a valid number"
                            label="Contact"
                            labelPlacement="inside"
                            name="Fcontact"
                            placeholder="Enter contact"
                            type="number"
                        />

                        <Input
                            className="max-w-[240px]"
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Occupation"
                            labelPlacement="inside"
                            name="Foccupation"
                            placeholder="Enter occupation"
                            type="text"
                        />  

                    </div>
                    
                </div>

                {/* Mother's Information */}
                <h4 className="text-[17px] font-semibold font-sans text-[#1b1b1b]">Mother's Information</h4>

                <div className="w-full flex flex-col gap-6">

                    {/* 1st row */}
                    <div className="w-full flex flex-row gap-4">
                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="First Name"
                            labelPlacement="inside"
                            name="Mfname"
                            placeholder="Enter first name"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Last Name"
                            labelPlacement="inside"
                            name="Mlname"
                            placeholder="Enter last name"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Middle Name"
                            labelPlacement="inside"
                            name="Mmname"
                            placeholder="Enter middle name"
                            type="text"
                        />

                        <DatePicker 
                            isRequired
                            className="max-w-[150px]" 
                            labelPlacement="inside"
                            label="Birth Date" 
                            name="Mdob"
                        />
                    </div>

                    {/* 2nd row */}
                    <div className="w-full flex flex-row gap-4">
                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Place of Birth"
                            labelPlacement="inside"
                            name="Mpob"
                            placeholder="Enter place of birth"
                            type="text"
                        />

                        <Input
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Citizenship"
                            labelPlacement="inside"
                            name="Mcitizen"
                            placeholder="Enter citizenship"
                            type="text"
                        />

                        <Input
                            className="max-w-[200px]"
                            isRequired
                            errorMessage="Please enter a valid number"
                            label="Contact"
                            labelPlacement="inside"
                            name="Mcontact"
                            placeholder="Enter contact"
                            type="number"
                        />
                        
                        <Input
                            className="max-w-[240px]"
                            isRequired
                            errorMessage="Please fill out this field"
                            label="Occupation"
                            labelPlacement="inside"
                            name="Moccupation"
                            placeholder="Enter occupation"
                            type="text"
                        />

                    </div>
                </div>

                {/* Submit Registration */}
                <div className="w-full flex flex-row gap-3 justify-end items-end absolute bottom-0">
                    
                    <Link to='/'>
                        <Button color="danger" variant="flat">
                            Cancel
                        </Button>
                    </Link>
                    <Link to='/capture'>
                        <Button color="primary" type="submit">
                            Register
                        </Button>
                    </Link>
                </div>

            </Form>
        </div>
    </div>


    return (<>
        {container }
    </>
    );
}

export default RegistrationPage