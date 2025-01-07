import {Form, Input} from "@nextui-org/react";
import { useLocation} from "react-router-dom";
import Header from "./header"

export const Information = () => {

    const location = useLocation();
    const { data } = location.state || {};
    const profile = JSON.parse(data)
    
    const details = <div className="w-full h-[100vh] flex flex-col items-center bg-[#ECF8FF]">
        <Header section={'profile'}/>
        <div className="mt-10 flex flex-row w-full h-full justify-center gap-5"> 

            <div className="w-1/4 h-[25rem] bg-white rounded-[20px] flex flex-col items-center justify-center"> 
                <img src={profile.image} className="w-[80%]"></img>
            </div>

            <div className="w-2/3 h-[90%] p-[2rem] bg-white rounded-[20px]">
                <Form
                className="w-full h-full flex flex-col gap-4 relative"
                validationBehavior="native"
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
                                value={profile.fname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Last Name"
                                labelPlacement="inside"
                                name="lname"
                                value={profile.lname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Middle Name"
                                labelPlacement="inside"
                                name="mname"
                                value={profile.mname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                className='max-w-[150px]'
                                errorMessage="Please fill out this field"
                                label="Date of Birth"
                                labelPlacement="inside"
                                name="dob"
                                value={profile.dob}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                className="max-w-28"
                                errorMessage="Please fill out this field"
                                label="Sex"
                                labelPlacement="inside"
                                name="sex"
                                value={profile.sex}
                                type="text"
                                isReadOnly
                            />
                        </div>
                        {/* 2nd row */}
                        <div className="w-full flex flex-row gap-4">
                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Place of Birth"
                                labelPlacement="inside"
                                name="pob"
                                value={profile.pob}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Citizenship"
                                labelPlacement="inside"
                                name="citizen"
                                value={profile.citizen}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Religion"
                                labelPlacement="inside"
                                name="religion"
                                value={profile.religion}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                className="max-w-[140px]"
                                errorMessage="Please fill out this field"
                                label="Religion"
                                labelPlacement="inside"
                                name="Marital Status"
                                value={profile.marital}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                className="max-w-[100px]"
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Weight (kg)"
                                labelPlacement="inside"
                                name="weight"
                                value={profile.weight}
                                type="number"
                                isReadOnly
                            />

                        </div>

                        {/* 3rd row */}
                        <div className="w-full flex flex-row gap-4">

                            <Input
                                className="max-w-[100px]"
                                isRequired
                                errorMessage="Please enter a valid number"
                                label="Height (cm)"
                                labelPlacement="inside"
                                name="height"
                                value={profile.height}
                                type="number"
                                isReadOnly
                            />
                            
                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Address"
                                labelPlacement="inside"
                                name="address"
                                value={profile.address}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                className="max-w-[120px]"
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Zip Code"
                                labelPlacement="inside"
                                name="zip"
                                value={profile.zip}
                                type="number"
                                isReadOnly
                            />

                            <Input
                                className="max-w-[200px]"
                                isRequired
                                errorMessage="Please enter a valid number"
                                label="Contact"
                                labelPlacement="inside"
                                name="contact"
                                value={profile.contact}
                                type="number"
                                isReadOnly
                            />

                            <Input
                                className="max-w-[250px]"
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Occupation"
                                labelPlacement="inside"
                                name="occupation"
                                value={profile.occupation}
                                type="text"
                                isReadOnly
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
                                value={profile.Ffname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Last Name"
                                labelPlacement="inside"
                                name="Flname"
                                value={profile.Flname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Middle Name"
                                labelPlacement="inside"
                                name="Fmname"
                                value={profile.Fmname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                className='max-w-[150px]'
                                errorMessage="Please fill out this field"
                                label="Date of Birth"
                                labelPlacement="inside"
                                name="dob"
                                value={profile.Fdob}
                                type="text"
                                isReadOnly
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
                                value={profile.Fpob}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Citizenship"
                                labelPlacement="inside"
                                name="Fcitizen"
                                value={profile.Fcitizen}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                className="max-w-[200px]"
                                isRequired
                                errorMessage="Please enter a valid number"
                                label="Contact"
                                labelPlacement="inside"
                                name="Fcontact"
                                value={profile.Fcontact}
                                type="number"
                                isReadOnly
                            />

                            <Input
                                className="max-w-[240px]"
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Occupation"
                                labelPlacement="inside"
                                name="Foccupation"
                                value={profile.Foccupation}
                                type="text"
                                isReadOnly
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
                                value={profile.Mfname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Last Name"
                                labelPlacement="inside"
                                name="Mlname"
                                value={profile.Mlname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Middle Name"
                                labelPlacement="inside"
                                name="Mmname"
                                value={profile.Mmname}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                className='max-w-[150px]'
                                errorMessage="Please fill out this field"
                                label="Date of Birth"
                                labelPlacement="inside"
                                name="Mdob"
                                value={profile.Mdob}
                                type="text"
                                isReadOnly
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
                                value={profile.Mpob}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Citizenship"
                                labelPlacement="inside"
                                name="Mcitizen"
                                value={profile.Mcitizen}
                                type="text"
                                isReadOnly
                            />

                            <Input
                                className="max-w-[200px]"
                                isRequired
                                errorMessage="Please enter a valid number"
                                label="Contact"
                                labelPlacement="inside"
                                name="Mcontact"
                                value={profile.Mcontact}
                                type="number"
                                isReadOnly
                            />
                            
                            <Input
                                className="max-w-[240px]"
                                isRequired
                                errorMessage="Please fill out this field"
                                label="Occupation"
                                labelPlacement="inside"
                                name="Moccupation"
                                value={profile.Moccupation}
                                type="text"
                                isReadOnly
                            />

                        </div>
                    </div>

                    {/* Submit Registration */}
                    <div className="w-full flex flex-row gap-3 justify-end items-end absolute bottom-0">
                        
                        {/* <Link to='/'>
                            <Button color="danger" variant="flat">
                                Cancel
                            </Button>
                        </Link>
                        <Link to='/capture'>
                            <Button color="primary" type="submit">
                                Register
                            </Button>
                        </Link> */}
                    </div>
                </Form>
            </div>
        </div>

    </div>

    return details

}
