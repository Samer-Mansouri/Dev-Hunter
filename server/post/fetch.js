const get = () => {
    fetch('http://localhost/api/data.php',{
        method: POST,
        mode: no-cors,
        header:{
            "Content-type":"application/json"
        },
    }).then((res) => {
        if (!res.ok) throw new Error("Something went wrogn");
        return res.json()
    }).then((data) => console.log(data))
    .catch(err => console.log(err))
}