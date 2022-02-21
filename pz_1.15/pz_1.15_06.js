function format(){
    let dt = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    console.log(`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}, ${days[dt.getDay()]}, ${dt.getDate()} of ${monthNames[dt.getMonth()]} ${dt.getFullYear()} year`);
}
format();