var CronJob = require('cron').CronJob;
var exec = require('child_process').exec;

new CronJob('* * * * * *', function() {
  exec('cd /var/www/lanyucorp.com/public_html/LanyuCorpWebsite; git checkout master; git fetch origin; git merge origin/master;', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });  
  exec('cd /var/www/lanyujiance.com/public_html/LaresTestingWebsite; git checkout master; git fetch origin; git merge origin/master;', (err, stdout, stderr) => {
    if (err) {
      console.error(err)
      // node couldn't execute the command
      return;
    }

    // the *entire* stdout and stderr (buffered)
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});
}, null, true, 'America/Los_Angeles');
