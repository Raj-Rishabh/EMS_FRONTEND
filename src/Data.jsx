import React from "react"

export default function Data() {
    const [data, setData] = React.useState({})
    
        React.useEffect(function() {
          console.log("Effect ran")
          fetch("http://localhost:4000/employees/668d8ea2e9fdebb0bd7c5a14")
              .then(res => res.json())
              .then(data => setData(data))
      }, [])

      const handleChange = (e) => {
        setData(prev => ({ ...prev,  [e.target.name]: e.target.value}))
      }

    return (
        <div>
            <input type="text" value={data.name} name="name" onChange={handleChange}/>
        </div>
    )
}
