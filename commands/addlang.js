/**
 * O Comando "addlang" adicionará os cargos aos membros.
 */

/** Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
 * Que passara os argumentos atraves do middleware que programamos.
 */
exports.run = (client, message, args) => {

    /** Verificamos se o numero de argumentos é o correto. */
    if (!(args.length === 1)) return message.reply(`?? Talvez isso possa ajuda-lo: \`\`\`${message.settings.PREFIX}${this.help.usage}\`\`\``);

    /** Então verificamos os argumentos e instanciamos o cargo que queremos pelo nome. */
    let role;
    if (args[0].toLowerCase() == 'java')
    {
        role = message.guild.roles.find("name", "Java");
    }
    else if (args[0].toLowerCase() == 'python')
    {
        role = message.guild.roles.find("name", "Python");
    }
    else if (args[0].toLowerCase() == 'c++')
    {
        role = message.guild.roles.find("name", "C++");
    }
    else if (args[0].toLowerCase() == 'c#')
    {
        role = message.guild.roles.find("name", "C#");
    }
    else if (args[0].toLowerCase() == 'kotlin')
    {
        role = message.guild.roles.find("name", "Kotlin");
    }
    else if (args[0].toLowerCase() == 'scala')
    {
        role = message.guild.roles.find("name", "Scala");
    }
    else if (args[0].toLowerCase() == 'go')
    {
        role = message.guild.roles.find("name", "Go");
    }
    else if (args[0].toLowerCase() == 'javascript')
    {
        role = message.guild.roles.find("name", "JavaScript");
    }
    else if (args[0].toLowerCase() == 'php')
    {
        role = message.guild.roles.find("name", "PHP");
    }
    else if (args[0].toLowerCase() == 'scala')
    {
        role = message.guild.roles.find("name", "Scala");
    }
    else if (args[0].toLowerCase() == 'clojure')
    {
        role = message.guild.roles.find("name", "Clojure");
    }
    else if (args[0].toLowerCase() == 'elixir')
    {
        role = message.guild.roles.find("name", "Elixir");
    }
    else if (args[0].toLowerCase() == 'c')
    {
        role = message.guild.roles.find("name", "C");
    }
    else if (args[0].toLowerCase() == 'swift')
    {
        role = message.guild.roles.find("name", "Swift");
    }
    else if (args[0].toLowerCase() == 'rust')
    {
        role = message.guild.roles.find("name", "Rust");
    }
    else if (args[0].toLowerCase() == 'assembly')
    {
        role = message.guild.roles.find("name", "Assembly");
    }
    else
    {
        const emoji = message.guild.emojis.find("name", "thinkkk");
        message.react(emoji);
        return message.reply(`?? Talvez isso possa ajuda-lo: \`\`\`${message.settings.PREFIX}${this.help.usage}\`\`\``);
    }

    /** Logo então atribuimos o cargo ao membro e mandamos uma mensagem como resposta
     * Caso o membro ja possua o cargo então é enviada uma mensagem retornando.
     */
    if (!message.member.roles.exists("name", role.name))
    {
        message.member.addRole(role);
        return message.reply(`*Beep boop!@* Agora você possui o cargo **${role.name}**`);
    }
    else
    {
        return message.reply(`Você ja possui este cargo!`);
    }
};

/** Aqui podemos colocar mais algumas configurações do comando. */
exports.conf = {

};

/** Aqui exportamos ajuda do comando como o seu nome categoria descrição etc... */
exports.help = {
    name: "addlang",
    category: "Moderação",
    description: "Adiciona um cargo de alguma linguagem de programação a si proprio.",
    usage: "addlang [java|c|c++|c#|python|kotlin|scala|go|javascript|php|swift|ruby|elixir|rust|assembly]"
}
