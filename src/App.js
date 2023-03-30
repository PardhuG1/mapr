import React from "react";
function App(){
    const arr = ["React js","python","java",]
    return(
        <div>
            {
                arr.map(
                    (value,index) => <li>{value}</li>
                )
            }
        </div>
    );
}
export default App;