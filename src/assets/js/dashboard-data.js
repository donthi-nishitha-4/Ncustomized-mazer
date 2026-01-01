fetch('../assets/data/data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('usersCount').innerText = data.users;
    document.getElementById('ordersCount').innerText = data.orders;
    document.getElementById('revenueCount').innerText = "₹" + data.revenue;
    document.getElementById('growthCount').innerText = data.growth + "%";
  });
