Fortnite = require('fortnite');
Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const stats = new Fortnite(config.API_KEY);

client.on('ready', () => console.log('Ich bin  bereit!'));

client.on('message', msg =>{
    if(msg.author.bot) return undefined;
    if(!msg.content.startsWith(config.prefix)) return undefined;
    
    let command = msg.content.split(" ")[0];
    command = command.slice(config.prefix.length);
    console.log(`Command: ${command}`);
    
    let args = msg.content.split(" ").slice(1);
    console.log(`Args: ${args}`);
    
    if(command==="help"){
        const embedhelp = new Discord.RichEmbed()
            .setTitle('__**StatsBot Commands**__')
            .setDescription(`**stats.fortnite <platform [ pc | xbl | psn ]> <username>**`)
            .setColor([255,198,82])
        return msg.channel.sendEmbed(embedhelp);
            
    }
    
    if(command === "fortnite"){
        let platform;
        let username;
        if(!['pc','xbl','psn'].includes(args[0])) return msg.channel.send('**Bitte die Platform angeben: `stats.fortnite <platform [ pc | xbl | psn ]> <username>`**');
        if(!args[1]) return msg.channel.send('**Bitte den Usernamen angeben: `stats.fortnite <platform [ pc | xbl | psn ]> <username>`**');
        
        platform = args.shift();
        username = args.join(' ');
        
        stats.getInfo(username, platform).then( data => {
            
            try{
                var trnsolo = data.stats.p2.trnRating.displayValue;
            }catch(error){
                console.log('trnsolo nicht vorhanden')
                var trnsolo = '-';
            }
            try{
                var trnduo = data.stats.p10.trnRating.displayValue;
            }catch(error){
                console.log('trnduo nicht vorhanden')
                var trnduo = '-'; 
            }
            try{
                var trnteam = data.stats.p9.trnRating.displayValue;
            }catch(error){
                console.log('trnteam nicht vorhanden')
                var trnteam = '-'; 
            }
            
            try{
                var scoresolo = data.stats.p2.score.displayValue;
            }catch(error){
                console.log('scoresolo nicht vorhanden')
                var scoresolo = '-';
            }
            try{
                var scoreduo = data.stats.p10.score.displayValue;
            }catch(error){
                console.log('scoreduo nicht vorhanden')
                var scoreduo = '-'; 
            }
            try{
                var scoreteam = data.stats.p9.score.displayValue;
            }catch(error){
                console.log('scoreteam nicht vorhanden')
                var scoreteam = '-'; 
            }
            
            try{
                var matchessolo = data.stats.p2.matches.displayValue;
            }catch(error){
                console.log('matchessolo nicht vorhanden')
                var matchessolo = '-';
            }
            try{
                var matchesduo = data.stats.p10.matches.displayValue;
            }catch(error){
                console.log('matchesduo nicht vorhanden')
                var matchesduo = '-'; 
            }
            try{
                var matchesteam = data.stats.p9.matches.displayValue;
            }catch(error){
                console.log('matchesteam nicht vorhanden')
                var matchesteam = '-'; 
            }
            
            try{
                var winssolo = data.stats.p2.top1.displayValue;
            }catch(error){
                console.log('winssolo nicht vorhanden')
                var winssolo = '-';
            }
            try{
                var winsduo = data.stats.p10.top1.displayValue;
            }catch(error){
                console.log('winsduo nicht vorhanden')
                var winsduo = '-'; 
            }
            try{
                var winsteam = data.stats.p9.top1.displayValue;
            }catch(error){
                console.log('winsteam nicht vorhanden')
                var winsteam = '-'; 
            }
                     
            try{
                var winratesolo = `${data.stats.p2.winRatio.displayValue}%`;
            }catch(error){
                console.log('winratesolo nicht vorhanden')
                var winratesolo = '-';
            }
            try{
                var winrateduo = `${data.stats.p10.winRatio.displayValue}%`;
            }catch(error){
                console.log('winrateduo nicht vorhanden')
                var winrateduo = '-'; 
            }
            try{
                var winrateteam = `${data.stats.p9.winRatio.displayValue}%`;
            }catch(error){
                console.log('winrateteam nicht vorhanden')
                var winrateteam = '-'; 
            }
            
            try{
                var killssolo = data.stats.p2.kills.displayValue;
            }catch(error){
                console.log('killssolo nicht vorhanden')
                var killssolo = '-';
            }
            try{
                var killsduo = data.stats.p10.kills.displayValue;
            }catch(error){
                console.log('killsduo nicht vorhanden')
                var killsduo = '-'; 
            }
            try{
                var killsteam = data.stats.p9.kills.displayValue;
            }catch(error){
                console.log('killsteam nicht vorhanden')
                var killsteam = '-'; 
            }
            
            try{
                var kdsolo = data.stats.p2.kd.displayValue;
            }catch(error){
                console.log('kdsolo nicht vorhanden')
                var kdsolo = '-';
            }
            try{
                var kdduo = data.stats.p10.kd.displayValue;
            }catch(error){
                console.log('kdduo nicht vorhanden')
                var kdduo = '-'; 
            }
            try{
                var kdteam = data.stats.p9.kd.displayValue;
            }catch(error){
                console.log('kdteam nicht vorhanden')
                var kdteam = '-'; 
            }
            
            try{
                var kpgsolo = data.stats.p2.kpg.displayValue;
            }catch(error){
                console.log('kpgsolo nicht vorhanden')
                var kpgsolo = '-';
            }
            try{
                var kpgduo = data.stats.p10.kpg.displayValue;
            }catch(error){
                console.log('kpgduo nicht vorhanden')
                var kpgduo = '-'; 
            }
            try{
                var kpgteam = data.stats.p9.kpg.displayValue;
            }catch(error){
                console.log('kpgteam nicht vorhanden')
                var kpgteam = '-'; 
            }
            
            try{
                var timesolo = data.stats.p2.avgTimePlayed.displayValue;
            }catch(error){
                console.log('timesolo nicht vorhanden')
                var timesolo = '-';
            }
            try{
                var timeduo = data.stats.p10.avgTimePlayed.displayValue;
            }catch(error){
                console.log('timeduo nicht vorhanden')
                var timeduo = '-'; 
            }
            try{
                var timeteam = data.stats.p9.avgTimePlayed.displayValue;
            }catch(error){
                console.log('timeteam nicht vorhanden')
                var timeteam = '-'; 
            }

            const embedfn = new Discord.RichEmbed()
                .setColor([255,198,82])
                .setTitle(`__**Fortnite Stats des Users: ${data.username}**__`)
                .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
                .addField(`\n
__**General**__`,`
**Score: ${data.lifetimeStats[6].value}
Time Played: ${data.lifetimeStats[13].value} 
Games Played: ${data.lifetimeStats[7].value}
Wins: ${data.lifetimeStats[8].value}
Win Ratio: ${data.lifetimeStats[9].value}
Kills: ${data.lifetimeStats[10].value}
Kills/Death: ${data.lifetimeStats[11].value}
avg. Survival Time: ${data.lifetimeStats[14].value}
**`,true)
                .addField(`\n
__**Solo**__`,`
    **    TRN Rating: ${trnsolo}
    Score: ${scoresolo}
    Games Played: ${matchessolo}
    Wins: ${winssolo}
    Win Ratio: ${winratesolo}
    Kills: ${killssolo}
    Kills/Death: ${kdsolo}
    Kills/Game: ${kpgsolo}
    avg. Survival Time: ${timesolo}
**`,true)
                .addField(`\n
__**Duo**__`,`
**TRN Rating: ${trnduo}
Score: ${scoreduo}
Games Played: ${matchesduo}
Wins: ${winsduo}
Win Ratio: ${winrateduo}
Kills: ${killsduo}
Kills/Death: ${kdduo}
Kills/Game: ${kpgduo}
avg. Survival Time: ${timeduo}
**`,true)
                .addField(`\n
__**Team**__`,`
    **    TRN Rating: ${trnteam}
    Score: ${scoreteam}
    Games Played: ${matchesteam}
    Wins: ${winsteam}
    Win Ratio: ${winrateteam}
    Kills: ${killsteam}
    Kills/Death: ${kdteam}
    Kills/Game: ${kpgteam}
    avg. Survival Time: ${timeteam}
**`,true)
            return msg.channel.sendEmbed(embedfn);
            
        })
        .catch(error => {
            console.log(error);
            return msg.channel.send(`**Username ${username} nicht gefunden!**`);
        })
    }
});

client.login(process.env.BOT_TOKEN);
