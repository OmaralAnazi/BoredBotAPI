document.getElementById('get-activity').addEventListener('click', function() {
  fetch('https://apis.scrimba.com/bored/api/activity')
      .then(response => response.json())
      .then(data => {
          document.getElementById('activity-container').style.display = 'block';
          document.getElementById('activity-txt').textContent = data.activity;
      });
});
