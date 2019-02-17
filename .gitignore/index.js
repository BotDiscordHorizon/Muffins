const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!!")

bot.on('ready', function() {
    bot.user.setGame("Commandes: !!help");
    console.log("Connectedç");
});

bot.login(process.env.Token2);

bot.on('message', msg => {//Démarrage
    if (msg.content === "!start"){
      msg.channel.send("Bot en cours d'éxecution !");
        }});

        bot.on('guildMemberAdd', memberd => {//ENTREE 
            let porte_role = memberd.guild.roles.find("name", "Nouveau");
            memberd.addRole(porte_role)
            const channelinn = memberd.guild.channels.find('name', "dessert")
            const mbrduser = memberd.user
            var embedad = new Discord.RichEmbed()
             .setColor("RANDOM")
             .setThumbnail(mbrduser.displayAvatarURL)
             .setTitle(`Bienvenue à Hothai !`)
             .setDescription(`Bienvenue <@${memberd.user.id}> ! Nous t'invitons à aller lire le <#480001287375683585> !`)
             .addField(`Pour entrer sur ce serveur il te suffit d'entrer la commande :`, "``!enterHothai``")
             .setFooter("Muffin")
             channelinn.send(embedad);
});

bot.on('message', msg => {//PORTE
    if(msg.content === "!enterHothai"){
      let portee_role = msg.guild.roles.find("name", "Nouveau");
      var mbrd = msg.member
      let new_role = mbrd.guild.roles.find("name", "Confirmé ✔");
      if(!msg.member.roles.get('527935136906477568')){
        mbrd.addRole(new_role);
        mbrd.removeRole(portee_role);
        msg.channel.bulkDelete(1);
      const channelin = mbrd.guild.channels.find('name', "dessert-info")
        let member = msg.author
        var embeda = new Discord.RichEmbed()
             .setColor(msg.guild.member(member).highestRole.color)
            .setThumbnail(member.displayAvatarURL)
            .setTitle(`Informations de ${member.username}.`)
            .addField(`Nom:`, member.username, true)
            .addField(`Id:`, member.id, true)
            .addField(`Bot:`, member.bot ? "Oui" : "Non", true)
            .addField("Game:", msg.guild.member(member).presence.game ? msg.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
            .addField("Surnom:", msg.guild.member(member).nickname ? msg.guild.member(member).nickname : "Aucun", true )
            .addField("Dernier message:", member.lastMessage, true)
            .addField(`Roles:`, msg.guild.member(member).roles.map(s => s).join(" | "), true)
            .setDescription(`<@${mbrd.user.id}> est entré(e) avec succés, Bienvenue à Hothai ★`)
            .setFooter("Muffin ★")
         channelin.send(embeda);
  
       const GG = mbrd.guild.channels.find('name', 'général')   
    var embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Bienvenue !")
    .setDescription(`**Souhaitons la bienvenue à <@${mbrd.user.id}>  qui vient de nous rejoindre !**
:small_red_triangle_down: Nous t'invitons à lire le <#480001287375683585> afin de respecter les règles de vie du serveur. \n :small_red_triangle_down: Tu peux aussi lire les <#515821880423219204> concernant le serveur. \n :small_red_triangle_down: Tu peux également t'attribuer des rôles dans <#515807651800678400>. \n :small_red_triangle_down: Afin d'en connaître un peu plus sur toi tu peux te présenter dans <#539880099210854400>.
:small_red_triangle_down: Si tu as besoin d'un renseignement ou autre n'hésites pas à aller voir un membre du staff !`)
    .setFooter("Muffin ★")
    return GG.send({embed})
     }else{
      msg.reply("Vous n'avez pas à utiliser cette commande !")
        }}
  });


  bot.on('message', msg => {//MODERATION
     
    if (msg.content === "!!ban"){
        msg.reply("Vous devez mentionner un utilisateur à ban avec ``!!ban <nom>``");
       }else{
          if(msg.content.startsWith("!mban")){
             if(!msg.member.hasPermission("BAN_MEMBERS")){
                 msg.reply("Vous n'avez pas la permission de ban !")
              }else{
                let memberd = msg.mentions.members.first();
                memberd.ban("Muffin")
                var embedsys = new Discord.RichEmbed()
                .setTitle("BAN effectué avec succés !")
                .setColor('#CC1714')
                .setDescription(`${memberd} s'est fait ban par ${msg.author} ! Ce n'est qu'un au revoir !!`)
                .setImage("https://tenor.com/view/angry-birds-kick-gif-10212381")
                .setFooter("Hothai ★")
                .setAuthor("Muffin")
                msg.channel.sendEmbed(embedsys)
                  }}}
  
  if (msg.content === "!!kick"){
      msg.reply("Vous devez mentionner un utilisateur à kick avec ``!!kick <nom>``");
    }else{
      if(msg.content.startsWith("!mkick")){
        if(!msg.member.hasPermission("KICK_MEMBERS")){
          msg.reply("Vous n'avez pas la permission de kick !")
        }else{
            let memberd = msg.mentions.members.first();
            memberd.kick("GG")
             var embedsys = new Discord.RichEmbed()
             .setTitle('KICK effectué avec succés !')
             .setColor('#FF9300')
             .setDescription(`${memberd} s'est fait Kick par ${msg.author} ! A la prochaine !`)
              .setImage("https://media.giphy.com/media/nwCz29GZlx0HfZZIwF/giphy.gif")
             .setAuthor("Muffin")
              .setFooter("Hothai ★")
              msg.channel.sendEmbed(embedsys)
                      }}};
  

  if(msg.content === "!!clear"){
    msg.reply("Merci de préciser le nombre de message à supprimer avec la commande ``!!clear <nombre>")
  }else{
    if(msg.content.startsWith("~clear")){
      if(!msg.member.hasPermission("KICK_MEMBERS")){
        msg.reply("Vous n'avez pas la permission")
      }else{
        var limita = msg.content.slice(7)
        var limitao = parseInt(limita)
        msg.channel.fetchMessages()
          .then(msg => {
           msg.channel.bulkDelete(limitao + 1);
          messagesDeleted = msg.array().length
           var embedw = new Discord.RichEmbed()
          .setColor('#FF4500')
           .setDescription(`Messages supprimés avec succés. \n Total  des messages supprimés : ` + limitao)
           msg.channel.sendEmbed(embedw)
           setTimeout(() => {msg.channel.bulkDelete(1);}, 60 * 50)
            })
        }}};

  if (msg.content === "!!mute"){
     msg.reply("Vous devez mentionner un utilisateur à mute avec ``!!mute <heures> <mention>``");
  }else{
      if(msg.content.startsWith("!mute")){
        if(!msg.member.hasPermission("KICK_MEMBERS")){
          msg.reply("Vous n'avez pas la permission de mute !")
        }else{
          let args = msg.content.split(' ')
          if(Number.isInteger(parseInt(args[1]))){
            let arg = parseInt(args[1])
           let mute_role = msg.guild.roles.find("name", "Muted");
            let memberd = msg.mentions.members.first();
            memberd.addRole(mute_role)
            setTimeout(() => {memberd.removeRole(mute_role);}, 3600000 * arg)
            var embedsys = new Discord.RichEmbed()
            .setColor('#FFFF63')
            .setTitle(`Mute de ${args[1]} heure(s) effectué avec succés !`)
            .setDescription(`${memberd} s'est fait mute par ${msg.author} le temps de ${args[1]} heure(s)..`)
            .setImage("https://cdn.discordapp.com/attachments/483742385474371594/545249894017925121/giphy_1.gif")
            .setFooter("HOTHAI ★")
            .setAuthor("Muffin")
            msg.channel.sendEmbed(embedsys)
         }else{
        msg.reply("Merci de mentionner une durée valide avec la commande ``!!mute <heures> <@utilisateur>``.")
      }}}};
  
  }); 
 
bot.on('message', message => {//UTILITAIRES

  if(message.content === "!!help"){//HELP
    var embed1 = new Discord.RichEmbed()
    .setTitle("Liste des commandes :")
   .addField("**!msondage :**", "Faites voter vos idées !")
   .addField("**!!embed :**", "créer vos propres embeds !")
    .addField("**!!say :**", "Faites parler le bot !")
    .addField("**!!userinfo :**", "Afficher des informations à propos de vous !")
    .addField("**!muffin :**", "Afficher des images de muffins !!")
    .addField("**!!modocmd :**", "Afficher la liste des commandes pour la modération.")
    .addField("**!!ping :**", "T'informe sur ton ping !")
    .addField("**!!avatar :**", "Affiche ton avatar ou celui d'autres utilisateurs")
    .addField("**!!link :**", "T'envoies un lien permanant du serveur !")
    .addField(" \n ***Bonne visite à Hothai ★ !***", "**:D**")
    .setColor("#581845")
    .setAuthor("Muffin")
    .setFooter("Hothai")
    message.channel.sendEmbed(embed1)        
    };  

    if(message.content === "!!link"){
      var embed1 = new Discord.RichEmbed()
          .setTitle(`Voici ton lien vers Hothai ! !`)
          .setDescription(`https://discord.gg/ncnvvmq`)
          .setThumbnail("https://cdn.discordapp.com/attachments/507172953650102273/545256547026993172/589605c8cba9841eabab60f1.png")
          .setImage('https://cdn.discordapp.com/attachments/474923379590168596/516294112375209999/Multi_Color_Bar.gif')
          .setColor("RANDOM")
          .setFooter("Hothai ★")
          .setAuthor("Muffin")
             message.author.sendEmbed(embed1).then(message =>{
               message.channel.send("Mp envoyé !!")
             })
  }

if (message.content.split(" ")[0] == "!msondage"){//SONDAGE
    message.delete()
    var embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**Idée de : ${message.author}** \n ${message.content.slice("!msondage ".length)} `);
    message.channel.send({embed}).then(embedMessage => {
    embedMessage.react("👍");
    embedMessage.react("👎");
})};

if(message.content === "!!annonce"){//ANNONCE CONCOURS
  if(!message.member.hasPermission("KICK_MEMBERS")){
    message.reply("Vous n'avez pas la permission")
  }else{
  const chananonce = message.member.guild.channels.find('name', "﹞annonces")
  var emmbedan = new Discord.RichEmbed()
  .setTitle("Rappel des concours !")
  .setColor('RANDOM')
  .setFooter(message.author.username)
  .addField("**<@&515810929653317632> , <@&480023029959884831> Les concours ont été renouvelés !**", "*N'oubliez pas d'aller voter !*")
  chananonce.sendEmbed(emmbedan)
}}

if(message.content === "!!ping"){
  message.channel.sendMessage('Temps de latence avec le serveur: `' + `${message.createdTimestamp - Date.now()}` + 'ms`');
};

if(message.content.startsWith('!!avatar')) {
  let user = message.mentions.users.first() || message.author;
     let embed = new Discord.RichEmbed()
     .setDescription(`**Avatar de ${user}**`)
   .setImage(user.avatarURL)
   .setColor('RANDOM')
     message.channel.send(embed);
 };

  if(message.content === "!!modocmd"){
    var embe = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Liste des commandes de modérations')
    .addField("**!!clear :**", "Effacer des messages.")
    .addField("**!!mute :**", "Muter un utilisateur.")
    .addField("**!!kick :**", "Kicker un utilisateur.")
    .addField("**!!ban :**", "Ban un utilisateur.")
    .addField("**!!annonce :**", "Envoyer un rappel pour les concours.")
    message.channel.sendEmbed(embe)
  }

if (message.content.startsWith("!!say")) {//SAY
  message.delete()
  const str = message.content.substring("!!say".length)
  message.channel.sendMessage(str)
  }

 if (message.content.split(" ")[0] == "!!embed"){//EMBED
    message.delete()
    var embed = new Discord.RichEmbed()
  .setColor("#FF7F50")  
  .setDescription(message.content.slice("!!membed ".length))
    message.channel.send({embed});
  }; 

  if (message.content.startsWith("!!userinfo")) {//INFO
    let member = message.mentions.users.first() || message.author;
    let userembed = new Discord.RichEmbed()
        .setColor(message.guild.member(member).highestRole.color)
        .setThumbnail(member.displayAvatarURL)
        .setTitle(`Informations de ${member.username}.`)
        .addField(`Nom:`, member.username, true)
        .addField(`Id:`, member.id, true)
        .addField(`Bot:`, member.bot ? "Oui" : "Non", true)
        .addField("Game:", message.guild.member(member).presence.game ? message.guild.member(member).presence.game.name : "Not Playing", true) // the ? and : are like an if statement if (msg.guild.member(member).presence.game ) { msg.guild.member(member).presence.game.name } else "Not Playing"
        .addField("Surnom:", message.guild.member(member).nickname ? message.guild.member(member).nickname : "Aucun", true )
        .addField("Dernier message:", member.lastMessage, true)
        .addField(`Roles:`, message.guild.member(member).roles.map(s => s).join(" | "), true)
        message.channel.send(userembed);
  };
 
    
});


  bot.on('message', message => {//RANDOM
    var randnum = 0
      function randomc(min, max){
        min = Math.ceil(0);
        max = Math.floor(6);
        randnum = Math.floor(Math.random() * (max - min +1)+ min);
    }
    
    if((message.content.includes("!muffin") || message.content.includes("!Muffin")) & message.author.id != "543817872502161410"){
      if(message.channel.id === "515840517158731781"){
      randomc()
      if (randnum ==1){
        var embed = new Discord.RichEmbed()
        .setImage("https://i.gifer.com/7HKg.gif")
       .setColor("RANDOM")
    message.channel.sendEmbed(embed)
          console.log(randnum);
      }
    
      if (randnum ==2){
        var embed = new Discord.RichEmbed()
        .setImage("https://i.gifer.com/7VPT.gif")
       .setColor("RANDOM")
    message.channel.sendEmbed(embed)
          console.log(randnum);
      }
    
      if (randnum ==3){
        var embed = new Discord.RichEmbed()
        .setImage("https://thumbs.gfycat.com/GaseousPartialCopepod-small.gif")
       .setColor("RANDOM")
    message.channel.sendEmbed(embed)
          console.log(randnum);
      }

      if (randnum ==4){
        var embed = new Discord.RichEmbed()
        .setImage("https://media1.tenor.com/images/8d953eb11b23f9e7d2ec8efbf88ab629/tenor.gif?itemid=5443212")
       .setColor("RANDOM")
    message.channel.sendEmbed(embed)
          console.log(randnum);
      }

      if (randnum ==5){
        var embed = new Discord.RichEmbed()
        .setImage("https://media1.tenor.com/images/a8df4ce142c74309b0666c36530cce2c/tenor.gif?itemid=7279870")
       .setColor("RANDOM")
    message.channel.sendEmbed(embed)
          console.log(randnum);
      }

      if (randnum ==6){
        var embed = new Discord.RichEmbed()
        .setImage("https://cdn.discordapp.com/attachments/483742385474371594/543819206584434698/SPOILER_big_1535046058_image.png")
       .setColor("RANDOM")
    message.channel.sendEmbed(embed)
          console.log(randnum);
      }
    }else{
     message.reply("Vous n'avez pas le droit d'utiliser cette commande ici !!")  
    };
  }
});

