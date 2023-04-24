import { useState } from "react";

function LocalStorage(){
    const [data, setData] = useState([]);

useEffect(() => {
  localStorage.setItem('dataKey', JSON.stringify(data));
}, [data]);
}

export default LocalStorage;