window.addEventListener('load', () => {
    
    for (let widget of document.getElementsByTagName('discord-widget')) {
        //getting attributes        //body
        let body1 = document.createElement('widget-body');

        //appending body to the widget
        widget.append(body1);



        //create a server with just your self in it and go to server settings/ widget, copy JSON API and enable server widget.
        //Invite channel doesn't matter
        //Replace 👇 link with your JSON API link
        fetch(`https://discord.com/api/guilds/1035781823030120448/widget.json`).then(data => {
            data.json().then(data => {
                //users
                data.members.forEach((user) => {
                //API refreshes every 4mins - 5mins
                //count for active members which will be 1                    

            
                let member1 = document.createElement('widget-member');
                let avatar1 = document.createElement('widget-member-avatar');
                let avatarIMG1 = document.createElement('img');
                let status1 = document.createElement(`widget-member-status-${user.status}`);
                let name1 = document.createElement('widget-member-name');
                let statusText1 = document.createElement('widget-member-status-text');
                avatarIMG1.src = user.avatar_url;
                status1.classList.add('widget-member-status');
                //update discriminator or remove if want
                //                                  👇here
                name1.innerText = user.username + "#3579";

                    if (user.game) {    
                        statusText1.innerText = user.game.name;
                }
                avatar1.append(avatarIMG1, status1);
                // Remove status feed from body.appen and add statusText
                //                      👇here if you want statusText on tsame line as avatar and name
                member1.append(avatar1, name1);
                body1.append(member1,"playing: ", statusText1);
                });

////////////////////////////////////////////////////////////////////////////////////////

                
            const date = new Date()
            const hours = date.getHours();

            if (hours >= 8 && 10 >= hours) {
                customstatus = "Breakfast";
            } else if (hours >= 11 && 13 >= hours) {
                customstatus = "Lunch";
            } else if (hours >= 14 && 18 >= hours) {
                customstatus ="Working";
            } else if (hours >= 19 && 22 >= hours) {
                customstatus ="Dinner";
            } else if (hours <= 23 && 7 >= hours) {
                customstatus ="Sleeping";
            }

                const x = `${data.members}`;

                /// UPDATE MANUALLY \\\ /// UPDATE MANUALLY \\\ /// UPDATE MANUALLY \\\ /// UPDATE MANUALLY \\\ /// UPDATE MANUALLY \\\



                if (!x.length){

                

                    let member = document.createElement('widget-member');
                    let avatar = document.createElement('widget-member-avatar');
                    let avatarIMG = document.createElement('img');
                    let name = document.createElement('widget-member-name');
                    let status = document.createElement('widget-member-status-text-offline');
                    avatarIMG.src = "https://cdn.discordapp.com/widget-avatars/-0_oJygd9WpCfmgTNP7rrLoV7gUQIBwLnzlVuUlnznI/LjnR1WYZawJMi0idAe8nSwTWs1ivCNoxVWT4ijjsHRNZaPAlSshh-fwr5sXvNgLYBQV_Fpc2ogLSWKn3yFUciQZG8PxgSdkUpvWtBATyeOIkrHI5VeOp4_B3bvNWiB84u4G2bx7wkny8BQ";
                    status.classList.add('widget-member-status-offline');
                    name.innerText = "RakeshMonkee#3579";


                    avatar.append(avatarIMG, status);


                    member.append(avatar, name);
                    body1.append(member," playing: ", customstatus)
                }
                
            });
        });
    }
});




