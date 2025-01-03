module.exports = {
    Main: {
        token: "",
        Database: {
            MongoDB: false,
            MongoURI: ""
        },
        globalCommands: true, // Komutlatın tüm sunuculara yüklenip yüklenmeyeceği
        CommandsDelete: false, // Komutların silinip silinmeyeceği (buga girme durumunda tüm sunuculardan slash komutları siler)
        prefixes: [".", "!"],
        developers: [""],
        guildId: "", // Global komutlar devredışı kaldığında komutların hangi sunucuya yükleneceği
    },
}
