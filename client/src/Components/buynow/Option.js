import React, { useContext } from 'react'
import { Logincontext } from '../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { url } from '../../baseurl';

const Option = ({ deletedata, get ,proddata}) => {
    // console.log(deletedata);

    const { account, setAccount } = useContext(Logincontext);
    // console.log(account);
    const userId=JSON.parse(localStorage.getItem("user"))._id
    const removedata = async (id) => {
        try {
            const res = await fetch(`${url}/remove/${id}/${userId}/`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"same-origin"
            });

            const data = await res.json();
            // console.log(data);

            if (res.status === 400 || !data) {
                console.log("error aai remove time pr");
            } else {
                setAccount(data)
                get();
                toast.success("Iteam remove from cart 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }
    const addquantity = async (id,quantity) => {
        try {
            const res = await fetch(`${url}/addquantity/${id}/${userId}/`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                   quantity:quantity
                }),
                credentials:"same-origin"
            });

            const data = await res.json();
            // console.log(data);

            if (res.status === 400 || !data) {
                console.log("error aai remove time pr");
            } else {
                setAccount(data)
                get();
                toast.success("Quantity has been updated😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }


    const changequantity=(e,id,quantity)=>{
        e.preventDefault();
        addquantity(id,quantity-"0")
    }

    return (
        <div className="add_remove_select" key={deletedata}>
            <select name="" id="" onChange={(e)=>{changequantity(e,deletedata,e.target.value)}} defaultValue={proddata.quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <p onClick={() => removedata(deletedata)} style={{ cursor: "pointer" }}>Delete</p><span>|</span>
            <p className="forremovemedia">Save Or Later</p><span>|</span>
            <p className="forremovemedia">See More like this</p>
            <ToastContainer />
        </div>

    )
}

export default Option;
