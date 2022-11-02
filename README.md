# Discord-user-widget

Description
---
Discord-user-widget uses the Discord Server Widget API but instead of selecting the server information, the discord user profile is selected and updates via the API.

Disclaimer⚠️
--- 
Server widget API updates on average every 4 - 5 mins meaning any information won't be updated straight away


How to use
---
1. Create a private discord server with just yourself or it won't work
2. ⚙️Go to server-settings / widget⚙️
3. Enable server widget
4. ✂️ Copy Server ID or JSON API to clipboard 📋
5. Follow steps in the JS document 

Make sure to update the section called 'UPDATE MANUALLY' with your discord info (NAME, DISCRIM, PFP)

To get avatar url visit

https://discord.com/api/guilds/INSERT-SERVER-ID-HERE/widget.json

Example

                         Server ID - 1035781823030120448 
                         
                                     👇👇👇👇👇👇👇👇👇👇
                                      
      https://discord.com/api/guilds/1035781823030120448/widget.json 

OR

Copy and past the JSON link into browser


There should be a field called "avatar_url"

Example

"avatar_url" : https://cdn.discordapp.com/widget-avatars/

Make sure your user status is set to either online, idle or dnd for avatar url to show, or else if offline, avatar src will not show

OR

If you want to change it to a photo in your own project, change the src link to the image src  

Example
--- 
Online:

Idle and dnd will be the same but status colour will change

![image](https://user-images.githubusercontent.com/89455475/199206582-3a66c7dd-4db2-4e20-aeef-1171856ca78d.png)

Offline:

![image](https://user-images.githubusercontent.com/89455475/199206617-8e380554-8171-49ee-adfa-d8095e6805df.png)
