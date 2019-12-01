module.exports = async function (context, req) {
    context.log('Let the games begin');
    const responses = ["נ", "ג", "ה", "ש"];

    const rnd = Math.floor(Math.random() * 3);

    const winner = responses[rnd];

    context.log('The winner is ' + winner);
    context.res = {
        body: winner
    };
};