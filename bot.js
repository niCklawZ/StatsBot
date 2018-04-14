Fortnite = require('fortnite');
Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
const stats = new Fortnite(config.API_KEY);

const RainbowSixApi = require('rainbowsix-api-node');
const R6 = new RainbowSixApi();

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
            .setDescription(`
**stats.fortnite <platform [ pc | xbl | psn ]> <username>
stats.rainbow <platform [ uplay | xone | ps4 ]> <username>
**`)
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
            
            const embedfn = new Discord.RichEmbed()
                .setColor([255,198,82])
                .setTitle(`__**Fortnite Stats des Users: ${data.username}**__`)
                .setThumbnail('https://vignette.wikia.nocookie.net/fortnite/images/d/d8/Icon_Founders_Badge.png')
                .addField(`\n
__**General**__`,`
**Score: ${data.lifetimeStats[6].value} 
Games Played: ${data.lifetimeStats[7].value}
Wins: ${data.lifetimeStats[8].value}
Win Ratio: ${data.lifetimeStats[9].value}
Kills: ${data.lifetimeStats[10].value}
Kills/Death: ${data.lifetimeStats[11].value}
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
**`,true)
            return msg.channel.sendEmbed(embedfn);
            
        })
        .catch(error => {
            console.log(error);
            return msg.channel.send(`**Username ${username} nicht gefunden!**`);
        })
    }
    if(command === "rainbow"){
        let platform;
        let username;
        if(!['uplay','xone','ps4'].includes(args[0])) return msg.channel.send('**Bitte die Platform angeben: `stats.rainbow <platform [ uplay | xone | ps4 ]> <username>`**');
        if(!args[1]) return msg.channel.send('**Bitte den Usernamen angeben: `stats.fortnite <platform [ uplay | xone | ps4 ]> <username>`**');
        
        platform = args.shift();
        username = args.join(' ');
        
        R6.stats(username, platform, false).then(data =>{
  
                if(data.player.stats.casual.has_played !== true){
                    var cmatches = '-';
                    var cwins = '-';
                    var closses = '-';
                    var cwlr = '-';
                    var ckills = '-';
                    var cdeaths = '-';
                    var ckd = '-';
                    var cph = '-';
                    var cpm = '-';
                    var cps = '-';
                }else{
                    var cwins = data.player.stats.casual.wins;
                    var closses = data.player.stats.casual.losses;
                    var cmatches = cwins+closses; 
                    var cwlr = Math.round( ((data.player.stats.casual.wins/((data.player.stats.casual.wins)+(data.player.stats.casual.losses)))*100)*100)/100;
                    var ckills = data.player.stats.casual.kills;
                    var cdeaths = data.player.stats.casual.deaths;
                    var ckd = data.player.stats.casual.kd;
                    var cph = Math.floor(data.player.stats.casual.playtime/3600);
                    var cpm = Math.floor((data.player.stats.casual.playtime/3600-cph)*60);
                    var cps = Math.floor((((data.player.stats.casual.playtime/3600-cph)*60)-cpm)*60);
                }
            
            
                if(data.player.stats.ranked.has_played !== true){
                    var rmatches = '-';
                    var rwins = '-';
                    var rlosses = '-';
                    var rwlr = '-';
                    var rkills = '-';
                    var rdeaths = '-';
                    var rkd = '-';
                    var rph = '-';
                    var rpm = '-';
                    var rps = '-';
                }else{
                    var rwins = data.player.stats.ranked.wins;
                    var rlosses = data.player.stats.ranked.losses;
                    var rmatches = rwins+rlosses; 
                    var rwlr = Math.round( ((data.player.stats.ranked.wins/((data.player.stats.ranked.wins)+(data.player.stats.ranked.losses)))*100)*100)/100;
                    var rkills = data.player.stats.ranked.kills;
                    var rdeaths = data.player.stats.ranked.deaths;
                    var rkd = data.player.stats.ranked.kd;
                    var rph = Math.floor(data.player.stats.ranked.playtime/3600);
                    var rpm = Math.floor((data.player.stats.ranked.playtime/3600-rph)*60);
                    var rps = Math.floor((((data.player.stats.ranked.playtime/3600-rph)*60)-rpm)*60);
                }
            
                    var rev = data.player.stats.overall.revives;
                    var sui = data.player.stats.overall.suicides;
                    var reinf = data.player.stats.overall.reinforcements_deployed;
                    var barr = data.player.stats.overall.barricades_built;
                    var fired = data.player.stats.overall.bullets_fired;
                    var hit = data.player.stats.overall.bullets_hit;
                    var acc = Math.round((data.player.stats.overall.bullets_hit/data.player.stats.overall.bullets_fired*100)*100)/100;
                    var hs = data.player.stats.overall.headshots;
                    var hsr = Math.round((data.player.stats.overall.headshots/data.player.stats.overall.bullets_hit*100)*100)/100;
                    var melee = data.player.stats.overall.melee_kills;
                    var penet = data.player.stats.overall.penetration_kills;
                    var ass = data.player.stats.overall.assists; 
            
     
            const embedrb = new Discord.RichEmbed()
                .setColor([255,198,82])
                .setTitle(`__**Rainbow Six: Siege Stats des Users: ${data.player.username}**__`)
                .setThumbnail('https://res.cloudinary.com/teepublic/image/private/s--W43hugIb--/t_Preview/b_rgb:191919,c_limit,f_jpg,h_630,q_90,w_630/v1478457254/production/designs/784128_1.jpg')
                .setDescription(`**Level: ${data.player.stats.progression.level} (${data.player.stats.progression.xp} XP)**`)
                .addField(`\n
__**Casual**__`,`
**Time Played: ${cph}h ${cpm}min ${cps}sec
Matches Played: ${cmatches}
Wins: ${cwins}
Losses: ${closses}
Win Ratio: ${cwlr}%
Kills: ${ckills}
Deaths: ${cdeaths}
K/D: ${ckd}
**`,false)
                .addField(`
__**Ranked**__`,`
**Time Played: ${rph}h ${rpm}min ${rps}sec
Matches Played: ${rmatches}
Wins: ${rwins}
Losses: ${rlosses}
Win Ratio: ${rwlr}%
Kills: ${rkills}
Deaths: ${rdeaths}
K/D: ${rkd}
**`,false)
                .addField(`
__**Other**__`,`
**Bullets Fired: ${fired}
Bullets Hit: ${hit}
Accuracy: ${acc}%
Headshots: ${hs}
Headshot Ratio: ${hsr}%
Melee Kills: ${melee}
Penetration Kills: ${penet}
Assists: ${ass}
Players Revived: ${rev}
Suicides: ${sui}
Reinforcements Deployed: ${reinf}
Barricades Built: ${barr}
**`,false)
            
            return msg.channel.sendEmbed(embedrb);
            
        }).catch(error => {
            console.error(error.errors[0].detail); 
            if(error.errors[0].detail === 'The player specified was not found.'){
                return msg.channel.send(`**Konnte den User ${username} nicht finden!**`);
            }
            else{
                return msg.channel.send(`**Error: ${error.errors[0].detail}**`);
                
            }
        });
        
    }
});

client.login(process.env.BOT_TOKEN);
