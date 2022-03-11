import React from "react";


const Boox = ({myStatus}) =>{
     console.log(myStatus);

     return (
        <div> {myStatus ? "Đã kết hôn" : "Chưa kết hôn"}</div>
        )
}
export default Boox