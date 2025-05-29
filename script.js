//https://lxosbgvtiysgcjoeqtep.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b3NiZ3Z0aXlzZ2Nqb2VxdGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MzMyMjMsImV4cCI6MjA2MzMwOTIyM30._HcRUS6pAGb2Zd7ggHNMaGQZVaaipMa7LJBYMtxhOLU

fetch("https://lxosbgvtiysgcjoeqtep.supabase.co/rest/v1/products", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b3NiZ3Z0aXlzZ2Nqb2VxdGVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MzMyMjMsImV4cCI6MjA2MzMwOTIyM30._HcRUS6pAGb2Zd7ggHNMaGQZVaaipMa7LJBYMtxhOLU",
  },
})
  .then((res) => res.json())
  .then(showData);

function showData(items) {
  console.log(items);
  //items.forEach()
}
//function (){}
