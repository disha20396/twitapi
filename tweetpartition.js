const getPartitionedTweet = (index, tweetmessage) => {
    var partiionedtweet = new Array();
    for (let i = 0; i < index.length; i++) {
        var row = index[i];
        var first = parseInt(row[0]);
        var last = parseInt(row[1]);
        var substring = tweetmessage.substring(first, last + 1);
        (partiionedtweet.push(substring) > 0);
    }
    return partiionedtweet;
}

module.exports = { getPartitionedTweet }