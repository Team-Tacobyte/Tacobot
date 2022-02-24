module.exports.activity =
    {
        run: (client, args) =>
        {
            setInterval(function()
            {
                const activities_list =
                    [
                        'with CertifiedRice',
                        'Asian boi',
                        '+help',
                        `with [${client.guilds.cache.first().memberCount}] members`,
                        'with Camorra',
                        'with Oak',
                        'with Cosh',
                        'with your mom'
                    ];
                const stat = activities_list[Math.floor(Math.random() * activities_list.length - 1) + 1];
                client.user.setActivity(stat,
                    {
                        type: 'STREAMING',
                        url: 'https://www.twitch.tv/loltyler1'
                    });
            }, 10000);
        }
    }